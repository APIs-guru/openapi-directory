

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://nlpcloud.io",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def read_dependencies_v1_en_core_web_sm_dependencies_post(self, request: operations.ReadDependenciesV1EnCoreWebSmDependenciesPostRequest) -> operations.ReadDependenciesV1EnCoreWebSmDependenciesPostResponse:
        r"""Read Dependencies
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/en_core_web_sm/dependencies"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReadDependenciesV1EnCoreWebSmDependenciesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DependenciesOut])
                res.dependencies_out = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def read_entities_v1_en_core_web_sm_entities_post(self, request: operations.ReadEntitiesV1EnCoreWebSmEntitiesPostRequest) -> operations.ReadEntitiesV1EnCoreWebSmEntitiesPostResponse:
        r"""Read Entities
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/en_core_web_sm/entities"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReadEntitiesV1EnCoreWebSmEntitiesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntitiesOut])
                res.entities_out = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def read_root_v1_en_core_web_sm_get(self) -> operations.ReadRootV1EnCoreWebSmGetResponse:
        r"""Read Root
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/en_core_web_sm/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReadRootV1EnCoreWebSmGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.read_root_v1_en_core_web_sm_get_200_application_json_any = out

        return res

    
    def read_sentence_dependencies_v1_en_core_web_sm_sentence_dependencies_post(self, request: operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest) -> operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse:
        r"""Read Sentence Dependencies
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/en_core_web_sm/sentence-dependencies"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SentenceDependenciesOut])
                res.sentence_dependencies_out = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def read_version_v1_en_core_web_sm_version_get(self) -> operations.ReadVersionV1EnCoreWebSmVersionGetResponse:
        r"""Read Version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/en_core_web_sm/version"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReadVersionV1EnCoreWebSmVersionGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VersionOut])
                res.version_out = out

        return res

    