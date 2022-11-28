import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplaceAllShapesWithSheetsChartResponse
/** 
 * The result of replacing shapes with a Google Sheets chart.
**/
export class ReplaceAllShapesWithSheetsChartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=occurrencesChanged" })
  occurrencesChanged?: number;
}
