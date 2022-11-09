import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CandlestickData } from "./candlestickdata";
import { CandlestickDomain } from "./candlestickdomain";


// CandlestickChartSpec
/** 
 * A candlestick chart.
**/
export class CandlestickChartSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.CandlestickData })
  data?: CandlestickData[];

  @Metadata({ data: "json, name=domain" })
  domain?: CandlestickDomain;
}
