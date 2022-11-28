import { SpeakeasyBase } from "../../../internal/utils";
import { PageElementProperties } from "./pageelementproperties";
export declare enum CreateSheetsChartRequestLinkingModeEnum {
    NotLinkedImage = "NOT_LINKED_IMAGE",
    Linked = "LINKED"
}
/**
 * Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
**/
export declare class CreateSheetsChartRequest extends SpeakeasyBase {
    chartId?: number;
    elementProperties?: PageElementProperties;
    linkingMode?: CreateSheetsChartRequestLinkingModeEnum;
    objectId?: string;
    spreadsheetId?: string;
}
