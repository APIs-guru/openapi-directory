import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PageElementProperties } from "./pageelementproperties";

export enum CreateSheetsChartRequestLinkingModeEnum {
    NotLinkedImage = "NOT_LINKED_IMAGE"
,    Linked = "LINKED"
}


// CreateSheetsChartRequest
/** 
 * Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
**/
export class CreateSheetsChartRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=chartId" })
  chartId?: number;

  @Metadata({ data: "json, name=elementProperties" })
  elementProperties?: PageElementProperties;

  @Metadata({ data: "json, name=linkingMode" })
  linkingMode?: CreateSheetsChartRequestLinkingModeEnum;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
