import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class DataExporterConfigs:
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

    
    def data_exporter_template(self, request: operations.DataExporterTemplateRequest) -> operations.DataExporterTemplateResponse:
        r"""Get all data exporter configs
        Get all data exporter configs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/data-exporter-configs/_template"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DataExporterTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataExporterConfig])
                res.data_exporter_config = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_bulk_data_exporter_configs(self, request: operations.CreateBulkDataExporterConfigsRequest) -> operations.CreateBulkDataExporterConfigsResponse:
        r"""Create a new data exporter configs
        Create a new data exporter configs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/data-exporter-configs/_bulk"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBulkDataExporterConfigsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.CreateBulkDataExporterConfigs200ApplicationJSON]])
                res.create_bulk_data_exporter_configs_200_application_json_objects = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_data_exporter_config(self, request: operations.CreateDataExporterConfigRequest) -> operations.CreateDataExporterConfigResponse:
        r"""Create a new data exporter config
        Create a new data exporter config
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/data-exporter-configs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDataExporterConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataExporterConfig])
                res.data_exporter_config = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_data_exporter_config(self, request: operations.DeleteDataExporterConfigRequest) -> operations.DeleteDataExporterConfigResponse:
        r"""Delete a data exporter config
        Delete a data exporter config
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/data-exporter-configs/{dataExporterConfigId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDataExporterConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Deleted])
                res.deleted = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def deletebulk_data_exporter_config(self, request: operations.DeletebulkDataExporterConfigRequest) -> operations.DeletebulkDataExporterConfigResponse:
        r"""Delete a data exporter config
        Delete a data exporter config
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/data-exporter-configs/_bulk"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletebulkDataExporterConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.DeletebulkDataExporterConfig200ApplicationJSON]])
                res.deletebulk_data_exporter_config_200_application_json_objects = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def find_all_data_exporters(self, request: operations.FindAllDataExportersRequest) -> operations.FindAllDataExportersResponse:
        r"""Get all data exporter configs
        Get all data exporter configs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/data-exporter-configs"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FindAllDataExportersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DataExporterConfig]])
                res.data_exporter_configs = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def find_data_exporter_config_by_id(self, request: operations.FindDataExporterConfigByIDRequest) -> operations.FindDataExporterConfigByIDResponse:
        r"""Get a data exporter config
        Get a data exporter config
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/data-exporter-configs/{dataExporterConfigId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FindDataExporterConfigByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataExporterConfig])
                res.data_exporter_config = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def patch_bulk_data_exporter_config(self, request: operations.PatchBulkDataExporterConfigRequest) -> operations.PatchBulkDataExporterConfigResponse:
        r"""Update a data exporter configs with a diff
        Update a data exporter configs with a diff
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/data-exporter-configs/_bulk"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchBulkDataExporterConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.PatchBulkDataExporterConfig200ApplicationJSON]])
                res.patch_bulk_data_exporter_config_200_application_json_objects = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def patch_data_exporter_config(self, request: operations.PatchDataExporterConfigRequest) -> operations.PatchDataExporterConfigResponse:
        r"""Update a data exporter config with a diff
        Update a data exporter config with a diff
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/data-exporter-configs/{dataExporterConfigId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDataExporterConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataExporterConfig])
                res.data_exporter_config = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_bulk_data_exporter_config(self, request: operations.UpdateBulkDataExporterConfigRequest) -> operations.UpdateBulkDataExporterConfigResponse:
        r"""Update a data exporter configs
        Update a data exporter configs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/data-exporter-configs/_bulk"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateBulkDataExporterConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.UpdateBulkDataExporterConfig200ApplicationJSON]])
                res.update_bulk_data_exporter_config_200_application_json_objects = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_data_exporter_config(self, request: operations.UpdateDataExporterConfigRequest) -> operations.UpdateDataExporterConfigResponse:
        r"""Update a data exporter config
        Update a data exporter config
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/data-exporter-configs/{dataExporterConfigId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDataExporterConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataExporterConfig])
                res.data_exporter_config = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    