import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";


export enum ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum {
    NotLinkedImage = "NOT_LINKED_IMAGE",
    Linked = "LINKED"
}


// ReplaceAllShapesWithSheetsChartRequest
/** 
 * Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
**/
export class ReplaceAllShapesWithSheetsChartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chartId" })
  chartId?: number;

  @SpeakeasyMetadata({ data: "json, name=containsText" })
  containsText?: SubstringMatchCriteria;

  @SpeakeasyMetadata({ data: "json, name=linkingMode" })
  linkingMode?: ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=pageObjectIds" })
  pageObjectIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
