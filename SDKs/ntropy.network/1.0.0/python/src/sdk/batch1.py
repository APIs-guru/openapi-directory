import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Batch1:
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

    
    def get_a_batch_of_business_transaction_classification_results_(self, request: operations.GetABatchOfBusinessTransactionClassificationResultsRequest) -> operations.GetABatchOfBusinessTransactionClassificationResultsResponse:
        r"""Get a batch of business transaction classification results.
        Get a batch of business transaction classification results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classifier/business/batch/{id}", request.path_params)
        
        
        client = self._client
        
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

    