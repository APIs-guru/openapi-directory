import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedChart } from "./embeddedchart";



// AddChartResponse
/** 
 * The result of adding a chart to a spreadsheet.
**/
export class AddChartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chart" })
  chart?: EmbeddedChart;
}
