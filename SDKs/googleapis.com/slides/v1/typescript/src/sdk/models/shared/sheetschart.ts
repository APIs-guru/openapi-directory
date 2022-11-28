import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SheetsChartProperties } from "./sheetschartproperties";



// SheetsChart
/** 
 * A PageElement kind representing a linked chart embedded from Google Sheets.
**/
export class SheetsChart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chartId" })
  chartId?: number;

  @SpeakeasyMetadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sheetsChartProperties" })
  sheetsChartProperties?: SheetsChartProperties;

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
