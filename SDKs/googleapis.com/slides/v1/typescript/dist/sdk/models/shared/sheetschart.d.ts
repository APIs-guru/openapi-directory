import { SpeakeasyBase } from "../../../internal/utils";
import { SheetsChartProperties } from "./sheetschartproperties";
/**
 * A PageElement kind representing a linked chart embedded from Google Sheets.
**/
export declare class SheetsChart extends SpeakeasyBase {
    chartId?: number;
    contentUrl?: string;
    sheetsChartProperties?: SheetsChartProperties;
    spreadsheetId?: string;
}
