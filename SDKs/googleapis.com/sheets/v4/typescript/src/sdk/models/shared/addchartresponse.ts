import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedChart } from "./embeddedchart";


// AddChartResponse
/** 
 * The result of adding a chart to a spreadsheet.
**/
export class AddChartResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=chart" })
  chart?: EmbeddedChart;
}
