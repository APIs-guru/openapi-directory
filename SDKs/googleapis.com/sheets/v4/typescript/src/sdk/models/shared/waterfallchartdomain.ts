import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChartData } from "./chartdata";


// WaterfallChartDomain
/** 
 * The domain of a waterfall chart.
**/
export class WaterfallChartDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: ChartData;

  @Metadata({ data: "json, name=reversed" })
  reversed?: boolean;
}
