import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";
import { ChartSpec } from "./chartspec";



// EmbeddedChart
/** 
 * A chart embedded in a sheet.
**/
export class EmbeddedChart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=border" })
  border?: EmbeddedObjectBorder;

  @SpeakeasyMetadata({ data: "json, name=chartId" })
  chartId?: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: EmbeddedObjectPosition;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: ChartSpec;
}
