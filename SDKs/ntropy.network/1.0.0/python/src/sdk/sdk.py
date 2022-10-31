import warnings
import requests
from typing import Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.ntropy.network",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def get_a_batch_of_business_transaction_classification_results_(self, request: operations.GetABatchOfBusinessTransactionClassificationResultsRequest) -> operations.GetABatchOfBusinessTransactionClassificationResultsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/classifier/business/batch/{id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetABatchOfBusinessTransactionClassificationResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON])
                res.get_a_batch_of_business_transaction_classification_results_200_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_a_batch_of_consumer_transaction_classification_results_(self, request: operations.GetABatchOfConsumerTransactionClassificationResultsRequest) -> operations.GetABatchOfConsumerTransactionClassificationResultsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/classifier/consumer/batch/{id}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetABatchOfConsumerTransactionClassificationResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON])
                res.get_a_batch_of_consumer_transaction_classification_results_200_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    