import { SpeakeasyBase } from "../../../internal/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";
export declare enum ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum {
    NotLinkedImage = "NOT_LINKED_IMAGE",
    Linked = "LINKED"
}
/**
 * Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
**/
export declare class ReplaceAllShapesWithSheetsChartRequest extends SpeakeasyBase {
    chartId?: number;
    containsText?: SubstringMatchCriteria;
    linkingMode?: ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum;
    pageObjectIds?: string[];
    spreadsheetId?: string;
}
