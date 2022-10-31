import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://sheets.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def sheets_spreadsheets_batch_update(self, request: operations.SheetsSpreadsheetsBatchUpdateRequest) -> operations.SheetsSpreadsheetsBatchUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}:batchUpdate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateSpreadsheetResponse])
                res.batch_update_spreadsheet_response = out

        return res

    
    def sheets_spreadsheets_create(self, request: operations.SheetsSpreadsheetsCreateRequest) -> operations.SheetsSpreadsheetsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v4/spreadsheets"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Spreadsheet])
                res.spreadsheet = out

        return res

    
    def sheets_spreadsheets_developer_metadata_get(self, request: operations.SheetsSpreadsheetsDeveloperMetadataGetRequest) -> operations.SheetsSpreadsheetsDeveloperMetadataGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsDeveloperMetadataGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeveloperMetadata])
                res.developer_metadata = out

        return res

    
    def sheets_spreadsheets_developer_metadata_search(self, request: operations.SheetsSpreadsheetsDeveloperMetadataSearchRequest) -> operations.SheetsSpreadsheetsDeveloperMetadataSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/developerMetadata:search", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsDeveloperMetadataSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchDeveloperMetadataResponse])
                res.search_developer_metadata_response = out

        return res

    
    def sheets_spreadsheets_get(self, request: operations.SheetsSpreadsheetsGetRequest) -> operations.SheetsSpreadsheetsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Spreadsheet])
                res.spreadsheet = out

        return res

    
    def sheets_spreadsheets_get_by_data_filter(self, request: operations.SheetsSpreadsheetsGetByDataFilterRequest) -> operations.SheetsSpreadsheetsGetByDataFilterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}:getByDataFilter", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsGetByDataFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Spreadsheet])
                res.spreadsheet = out

        return res

    
    def sheets_spreadsheets_sheets_copy_to(self, request: operations.SheetsSpreadsheetsSheetsCopyToRequest) -> operations.SheetsSpreadsheetsSheetsCopyToResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsSheetsCopyToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SheetProperties])
                res.sheet_properties = out

        return res

    
    def sheets_spreadsheets_values_append(self, request: operations.SheetsSpreadsheetsValuesAppendRequest) -> operations.SheetsSpreadsheetsValuesAppendResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values/{range}:append", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesAppendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppendValuesResponse])
                res.append_values_response = out

        return res

    
    def sheets_spreadsheets_values_batch_clear(self, request: operations.SheetsSpreadsheetsValuesBatchClearRequest) -> operations.SheetsSpreadsheetsValuesBatchClearResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchClear", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchClearValuesResponse])
                res.batch_clear_values_response = out

        return res

    
    def sheets_spreadsheets_values_batch_clear_by_data_filter(self, request: operations.SheetsSpreadsheetsValuesBatchClearByDataFilterRequest) -> operations.SheetsSpreadsheetsValuesBatchClearByDataFilterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchClearByDataFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchClearValuesByDataFilterResponse])
                res.batch_clear_values_by_data_filter_response = out

        return res

    
    def sheets_spreadsheets_values_batch_get(self, request: operations.SheetsSpreadsheetsValuesBatchGetRequest) -> operations.SheetsSpreadsheetsValuesBatchGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchGet", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchGetValuesResponse])
                res.batch_get_values_response = out

        return res

    
    def sheets_spreadsheets_values_batch_get_by_data_filter(self, request: operations.SheetsSpreadsheetsValuesBatchGetByDataFilterRequest) -> operations.SheetsSpreadsheetsValuesBatchGetByDataFilterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchGetByDataFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchGetValuesByDataFilterResponse])
                res.batch_get_values_by_data_filter_response = out

        return res

    
    def sheets_spreadsheets_values_batch_update(self, request: operations.SheetsSpreadsheetsValuesBatchUpdateRequest) -> operations.SheetsSpreadsheetsValuesBatchUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchUpdate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateValuesResponse])
                res.batch_update_values_response = out

        return res

    
    def sheets_spreadsheets_values_batch_update_by_data_filter(self, request: operations.SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest) -> operations.SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateValuesByDataFilterResponse])
                res.batch_update_values_by_data_filter_response = out

        return res

    
    def sheets_spreadsheets_values_clear(self, request: operations.SheetsSpreadsheetsValuesClearRequest) -> operations.SheetsSpreadsheetsValuesClearResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values/{range}:clear", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClearValuesResponse])
                res.clear_values_response = out

        return res

    
    def sheets_spreadsheets_values_get(self, request: operations.SheetsSpreadsheetsValuesGetRequest) -> operations.SheetsSpreadsheetsValuesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values/{range}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValueRange])
                res.value_range = out

        return res

    
    def sheets_spreadsheets_values_update(self, request: operations.SheetsSpreadsheetsValuesUpdateRequest) -> operations.SheetsSpreadsheetsValuesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values/{range}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateValuesResponse])
                res.update_values_response = out

        return res

    