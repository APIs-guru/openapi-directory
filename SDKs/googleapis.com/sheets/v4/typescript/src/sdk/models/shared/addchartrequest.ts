import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedChart } from "./embeddedchart";


// AddChartRequest
/** 
 * Adds a chart to a sheet in the spreadsheet.
**/
export class AddChartRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=chart" })
  chart?: EmbeddedChart;
}
