import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChartData } from "./chartdata";


// CandlestickDomain
/** 
 * The domain of a CandlestickChart.
**/
export class CandlestickDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: ChartData;

  @Metadata({ data: "json, name=reversed" })
  reversed?: boolean;
}
