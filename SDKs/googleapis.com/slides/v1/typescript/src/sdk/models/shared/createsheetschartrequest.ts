import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageElementProperties } from "./pageelementproperties";


export enum CreateSheetsChartRequestLinkingModeEnum {
    NotLinkedImage = "NOT_LINKED_IMAGE",
    Linked = "LINKED"
}


// CreateSheetsChartRequest
/** 
 * Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
**/
export class CreateSheetsChartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chartId" })
  chartId?: number;

  @SpeakeasyMetadata({ data: "json, name=elementProperties" })
  elementProperties?: PageElementProperties;

  @SpeakeasyMetadata({ data: "json, name=linkingMode" })
  linkingMode?: CreateSheetsChartRequestLinkingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
