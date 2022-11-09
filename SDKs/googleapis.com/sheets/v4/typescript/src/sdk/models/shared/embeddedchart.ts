import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";
import { ChartSpec } from "./chartspec";


// EmbeddedChart
/** 
 * A chart embedded in a sheet.
**/
export class EmbeddedChart extends SpeakeasyBase {
  @Metadata({ data: "json, name=border" })
  border?: EmbeddedObjectBorder;

  @Metadata({ data: "json, name=chartId" })
  chartId?: number;

  @Metadata({ data: "json, name=position" })
  position?: EmbeddedObjectPosition;

  @Metadata({ data: "json, name=spec" })
  spec?: ChartSpec;
}
