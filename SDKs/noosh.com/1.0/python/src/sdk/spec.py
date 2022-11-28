import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Spec:
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

    
    def get_v1_workgroups_workgroup_id_projects_project_id_specs_spec_id_(self, request: operations.GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequest) -> operations.GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDResponse:
        r"""List a specific spec of project Level
        List a specific spec of project Level
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_list_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_list_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_v1_workgroups_workgroup_id_spec_types_spec_type_id_spec_type_fields(self, request: operations.GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsRequest) -> operations.GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsResponse:
        r"""Get Spec Type Fields
        Get Spec Type Fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/specTypes/{spec_type_id}/specTypeFields", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.property_param_list_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.property_param_list_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def put_v1_workgroups_workgroup_id_projects_project_id_specs_spec_id_(self, request: operations.PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequest) -> operations.PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDResponse:
        r"""Update a specific Spec
        Update a specific Spec
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_http_status_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_product_type_list_of_workgroup(self, request: operations.GetProductTypeListOfWorkgroupRequest) -> operations.GetProductTypeListOfWorkgroupResponse:
        r"""Get product type of workgroup level
        Get product type of workgroup level
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/productTypes", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductTypeListOfWorkgroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.workgroup_attribute_list_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.workgroup_attribute_list_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_spec(self, request: operations.GetSpecRequest) -> operations.GetSpecResponse:
        r"""List a specific spec of project Level
        List a specific spec of project Level
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/1.1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.v1x1_spec_expand_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.v1x1_spec_expand_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_spec_list(self, request: operations.GetSpecListRequest) -> operations.GetSpecListResponse:
        r"""List specs of project Level
        List specs of project Level
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/projects/{project_id}/specs", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpecListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_list_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_list_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_spec_product_type_list_of_workgroup(self, request: operations.GetSpecProductTypeListOfWorkgroupRequest) -> operations.GetSpecProductTypeListOfWorkgroupResponse:
        r"""Get product type of spec level by workgroupId
        Get product type of spec level by workgroupId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/productTypesOfSpecTypes", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpecProductTypeListOfWorkgroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.workgroup_attribute_list_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.workgroup_attribute_list_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_spec_type_fields(self, request: operations.GetSpecTypeFieldsRequest) -> operations.GetSpecTypeFieldsResponse:
        r"""Get Spec Type Fields
        Get Spec Type Fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/1.1/workgroups/{workgroup_id}/specTypes/{spec_type_id}/specTypeFields", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpecTypeFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_type_fields_list_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_type_fields_list_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def post_spec(self, request: operations.PostSpecRequest) -> operations.PostSpecResponse:
        r"""Create a Spec
        Create a Spec
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/projects/{project_id}/specs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_vo = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def post_spec_product_type_list_of_workgroup(self, request: operations.PostSpecProductTypeListOfWorkgroupRequest) -> operations.PostSpecProductTypeListOfWorkgroupResponse:
        r"""Register product types for spec types
        Register product types for spec types
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/productTypesOfSpecTypes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSpecProductTypeListOfWorkgroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.wg_spec_prd_type_reg_persist_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.wg_spec_prd_type_reg_persist_vo = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def put_spec(self, request: operations.PutSpecRequest) -> operations.PutSpecResponse:
        r"""Update a specific Spec
        Update a specific Spec
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/1.1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.spec_http_status_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    