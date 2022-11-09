import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplaceAllShapesWithSheetsChartResponse
/** 
 * The result of replacing shapes with a Google Sheets chart.
**/
export class ReplaceAllShapesWithSheetsChartResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=occurrencesChanged" })
  occurrencesChanged?: number;
}
