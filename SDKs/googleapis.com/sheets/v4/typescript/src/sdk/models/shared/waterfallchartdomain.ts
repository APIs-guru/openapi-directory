import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";



// WaterfallChartDomain
/** 
 * The domain of a waterfall chart.
**/
export class WaterfallChartDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=reversed" })
  reversed?: boolean;
}
