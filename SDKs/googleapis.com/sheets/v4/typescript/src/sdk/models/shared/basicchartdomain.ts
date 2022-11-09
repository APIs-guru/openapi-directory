import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChartData } from "./chartdata";


// BasicChartDomain
/** 
 * The domain of a chart. For example, if charting stock prices over time, this would be the date.
**/
export class BasicChartDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: ChartData;

  @Metadata({ data: "json, name=reversed" })
  reversed?: boolean;
}
