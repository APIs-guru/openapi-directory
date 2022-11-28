import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedChart } from "./embeddedchart";



// AddChartRequest
/** 
 * Adds a chart to a sheet in the spreadsheet.
**/
export class AddChartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chart" })
  chart?: EmbeddedChart;
}
