import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Spreadsheets:
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

    
    def sheets_spreadsheets_batch_update(self, request: operations.SheetsSpreadsheetsBatchUpdateRequest) -> operations.SheetsSpreadsheetsBatchUpdateResponse:
        r"""Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateSpreadsheetResponse])
                res.batch_update_spreadsheet_response = out

        return res

    
    def sheets_spreadsheets_create(self, request: operations.SheetsSpreadsheetsCreateRequest) -> operations.SheetsSpreadsheetsCreateResponse:
        r"""Creates a spreadsheet, returning the newly created spreadsheet.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/spreadsheets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Spreadsheet])
                res.spreadsheet = out

        return res

    
    def sheets_spreadsheets_developer_metadata_get(self, request: operations.SheetsSpreadsheetsDeveloperMetadataGetRequest) -> operations.SheetsSpreadsheetsDeveloperMetadataGetResponse:
        r"""Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsDeveloperMetadataGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeveloperMetadata])
                res.developer_metadata = out

        return res

    
    def sheets_spreadsheets_developer_metadata_search(self, request: operations.SheetsSpreadsheetsDeveloperMetadataSearchRequest) -> operations.SheetsSpreadsheetsDeveloperMetadataSearchResponse:
        r"""Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/developerMetadata:search", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsDeveloperMetadataSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchDeveloperMetadataResponse])
                res.search_developer_metadata_response = out

        return res

    
    def sheets_spreadsheets_get(self, request: operations.SheetsSpreadsheetsGetRequest) -> operations.SheetsSpreadsheetsGetResponse:
        r"""Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Spreadsheet])
                res.spreadsheet = out

        return res

    
    def sheets_spreadsheets_get_by_data_filter(self, request: operations.SheetsSpreadsheetsGetByDataFilterRequest) -> operations.SheetsSpreadsheetsGetByDataFilterResponse:
        r"""Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}:getByDataFilter", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsGetByDataFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Spreadsheet])
                res.spreadsheet = out

        return res

    
    def sheets_spreadsheets_sheets_copy_to(self, request: operations.SheetsSpreadsheetsSheetsCopyToRequest) -> operations.SheetsSpreadsheetsSheetsCopyToResponse:
        r"""Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsSheetsCopyToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SheetProperties])
                res.sheet_properties = out

        return res

    
    def sheets_spreadsheets_values_append(self, request: operations.SheetsSpreadsheetsValuesAppendRequest) -> operations.SheetsSpreadsheetsValuesAppendResponse:
        r"""Appends values to a spreadsheet. The input range is used to search for existing data and find a \"table\" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values/{range}:append", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesAppendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppendValuesResponse])
                res.append_values_response = out

        return res

    
    def sheets_spreadsheets_values_batch_clear(self, request: operations.SheetsSpreadsheetsValuesBatchClearRequest) -> operations.SheetsSpreadsheetsValuesBatchClearResponse:
        r"""Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchClear", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchClearValuesResponse])
                res.batch_clear_values_response = out

        return res

    
    def sheets_spreadsheets_values_batch_clear_by_data_filter(self, request: operations.SheetsSpreadsheetsValuesBatchClearByDataFilterRequest) -> operations.SheetsSpreadsheetsValuesBatchClearByDataFilterResponse:
        r"""Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchClearByDataFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchClearValuesByDataFilterResponse])
                res.batch_clear_values_by_data_filter_response = out

        return res

    
    def sheets_spreadsheets_values_batch_get(self, request: operations.SheetsSpreadsheetsValuesBatchGetRequest) -> operations.SheetsSpreadsheetsValuesBatchGetResponse:
        r"""Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchGetValuesResponse])
                res.batch_get_values_response = out

        return res

    
    def sheets_spreadsheets_values_batch_get_by_data_filter(self, request: operations.SheetsSpreadsheetsValuesBatchGetByDataFilterRequest) -> operations.SheetsSpreadsheetsValuesBatchGetByDataFilterResponse:
        r"""Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchGetByDataFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchGetValuesByDataFilterResponse])
                res.batch_get_values_by_data_filter_response = out

        return res

    
    def sheets_spreadsheets_values_batch_update(self, request: operations.SheetsSpreadsheetsValuesBatchUpdateRequest) -> operations.SheetsSpreadsheetsValuesBatchUpdateResponse:
        r"""Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateValuesResponse])
                res.batch_update_values_response = out

        return res

    
    def sheets_spreadsheets_values_batch_update_by_data_filter(self, request: operations.SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest) -> operations.SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse:
        r"""Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateValuesByDataFilterResponse])
                res.batch_update_values_by_data_filter_response = out

        return res

    
    def sheets_spreadsheets_values_clear(self, request: operations.SheetsSpreadsheetsValuesClearRequest) -> operations.SheetsSpreadsheetsValuesClearResponse:
        r"""Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values/{range}:clear", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClearValuesResponse])
                res.clear_values_response = out

        return res

    
    def sheets_spreadsheets_values_get(self, request: operations.SheetsSpreadsheetsValuesGetRequest) -> operations.SheetsSpreadsheetsValuesGetResponse:
        r"""Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values/{range}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValueRange])
                res.value_range = out

        return res

    
    def sheets_spreadsheets_values_update(self, request: operations.SheetsSpreadsheetsValuesUpdateRequest) -> operations.SheetsSpreadsheetsValuesUpdateResponse:
        r"""Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/spreadsheets/{spreadsheetId}/values/{range}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SheetsSpreadsheetsValuesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateValuesResponse])
                res.update_values_response = out

        return res

    