import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SheetsChartReference
/** 
 * A reference to a linked chart embedded from Google Sheets.
**/
export class SheetsChartReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=chartId" })
  chartId?: number;

  @Metadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
