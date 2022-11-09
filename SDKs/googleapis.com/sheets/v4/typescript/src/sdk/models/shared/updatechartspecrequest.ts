import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChartSpec } from "./chartspec";


// UpdateChartSpecRequest
/** 
 * Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)
**/
export class UpdateChartSpecRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=chartId" })
  chartId?: number;

  @Metadata({ data: "json, name=spec" })
  spec?: ChartSpec;
}
