import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartSpec } from "./chartspec";



// UpdateChartSpecRequest
/** 
 * Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)
**/
export class UpdateChartSpecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chartId" })
  chartId?: number;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: ChartSpec;
}
