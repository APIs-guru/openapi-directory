import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";



// BasicChartDomain
/** 
 * The domain of a chart. For example, if charting stock prices over time, this would be the date.
**/
export class BasicChartDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=reversed" })
  reversed?: boolean;
}
