import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Consumer:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_a_batch_of_consumer_transaction_classification_results_(self, request: operations.GetABatchOfConsumerTransactionClassificationResultsRequest) -> operations.GetABatchOfConsumerTransactionClassificationResultsResponse:
        r"""Get a batch of consumer transaction classification results.
        Get a batch of consumer transaction classification results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classifier/consumer/batch/{id}", request.path_params)
        
        
        client = self._client
        
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

    