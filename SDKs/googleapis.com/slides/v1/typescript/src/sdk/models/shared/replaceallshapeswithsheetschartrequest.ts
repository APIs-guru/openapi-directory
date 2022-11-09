import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";

export enum ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum {
    NotLinkedImage = "NOT_LINKED_IMAGE"
,    Linked = "LINKED"
}


// ReplaceAllShapesWithSheetsChartRequest
/** 
 * Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
**/
export class ReplaceAllShapesWithSheetsChartRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=chartId" })
  chartId?: number;

  @Metadata({ data: "json, name=containsText" })
  containsText?: SubstringMatchCriteria;

  @Metadata({ data: "json, name=linkingMode" })
  linkingMode?: ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum;

  @Metadata({ data: "json, name=pageObjectIds" })
  pageObjectIds?: string[];

  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
