import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SheetsChartReference
/** 
 * A reference to a linked chart embedded from Google Sheets.
**/
export class SheetsChartReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chartId" })
  chartId?: number;

  @SpeakeasyMetadata({ data: "json, name=spreadsheetId" })
  spreadsheetId?: string;
}
