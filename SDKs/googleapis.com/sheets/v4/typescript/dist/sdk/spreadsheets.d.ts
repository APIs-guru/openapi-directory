import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Spreadsheets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sheetsSpreadsheetsBatchUpdate - Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
    **/
    sheetsSpreadsheetsBatchUpdate(req: operations.SheetsSpreadsheetsBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsBatchUpdateResponse>;
    /**
     * sheetsSpreadsheetsCreate - Creates a spreadsheet, returning the newly created spreadsheet.
    **/
    sheetsSpreadsheetsCreate(req: operations.SheetsSpreadsheetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsCreateResponse>;
    /**
     * sheetsSpreadsheetsDeveloperMetadataGet - Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.
    **/
    sheetsSpreadsheetsDeveloperMetadataGet(req: operations.SheetsSpreadsheetsDeveloperMetadataGetRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsDeveloperMetadataGetResponse>;
    /**
     * sheetsSpreadsheetsDeveloperMetadataSearch - Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.
    **/
    sheetsSpreadsheetsDeveloperMetadataSearch(req: operations.SheetsSpreadsheetsDeveloperMetadataSearchRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsDeveloperMetadataSearchResponse>;
    /**
     * sheetsSpreadsheetsGet - Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
    **/
    sheetsSpreadsheetsGet(req: operations.SheetsSpreadsheetsGetRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsGetResponse>;
    /**
     * sheetsSpreadsheetsGetByDataFilter - Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.
    **/
    sheetsSpreadsheetsGetByDataFilter(req: operations.SheetsSpreadsheetsGetByDataFilterRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsGetByDataFilterResponse>;
    /**
     * sheetsSpreadsheetsSheetsCopyTo - Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
    **/
    sheetsSpreadsheetsSheetsCopyTo(req: operations.SheetsSpreadsheetsSheetsCopyToRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsSheetsCopyToResponse>;
    /**
     * sheetsSpreadsheetsValuesAppend - Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
    **/
    sheetsSpreadsheetsValuesAppend(req: operations.SheetsSpreadsheetsValuesAppendRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsValuesAppendResponse>;
    /**
     * sheetsSpreadsheetsValuesBatchClear - Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.
    **/
    sheetsSpreadsheetsValuesBatchClear(req: operations.SheetsSpreadsheetsValuesBatchClearRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsValuesBatchClearResponse>;
    /**
     * sheetsSpreadsheetsValuesBatchClearByDataFilter - Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
    **/
    sheetsSpreadsheetsValuesBatchClearByDataFilter(req: operations.SheetsSpreadsheetsValuesBatchClearByDataFilterRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsValuesBatchClearByDataFilterResponse>;
    /**
     * sheetsSpreadsheetsValuesBatchGet - Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
    **/
    sheetsSpreadsheetsValuesBatchGet(req: operations.SheetsSpreadsheetsValuesBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsValuesBatchGetResponse>;
    /**
     * sheetsSpreadsheetsValuesBatchGetByDataFilter - Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
    **/
    sheetsSpreadsheetsValuesBatchGetByDataFilter(req: operations.SheetsSpreadsheetsValuesBatchGetByDataFilterRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsValuesBatchGetByDataFilterResponse>;
    /**
     * sheetsSpreadsheetsValuesBatchUpdate - Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
    **/
    sheetsSpreadsheetsValuesBatchUpdate(req: operations.SheetsSpreadsheetsValuesBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsValuesBatchUpdateResponse>;
    /**
     * sheetsSpreadsheetsValuesBatchUpdateByDataFilter - Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.
    **/
    sheetsSpreadsheetsValuesBatchUpdateByDataFilter(req: operations.SheetsSpreadsheetsValuesBatchUpdateByDataFilterRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsValuesBatchUpdateByDataFilterResponse>;
    /**
     * sheetsSpreadsheetsValuesClear - Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
    **/
    sheetsSpreadsheetsValuesClear(req: operations.SheetsSpreadsheetsValuesClearRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsValuesClearResponse>;
    /**
     * sheetsSpreadsheetsValuesGet - Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
    **/
    sheetsSpreadsheetsValuesGet(req: operations.SheetsSpreadsheetsValuesGetRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsValuesGetResponse>;
    /**
     * sheetsSpreadsheetsValuesUpdate - Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
    **/
    sheetsSpreadsheetsValuesUpdate(req: operations.SheetsSpreadsheetsValuesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SheetsSpreadsheetsValuesUpdateResponse>;
}
