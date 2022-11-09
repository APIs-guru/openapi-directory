import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SheetsChartProperties } from "./sheetschartproperties";


// SheetsChart
/** 
 * A PageElement kind representing a linked chart embedded from Google Sheets.
**/
export class SheetsChart extends SpeakeasyBase {
  @Metadata({ data: "json, name=chartId" })
  chartId?: number;

  @Metadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @Metadata({ data: "json, name=sheetsChartProperties" })
  sheetsChartProperties?: SheetsChartProperties;

  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
