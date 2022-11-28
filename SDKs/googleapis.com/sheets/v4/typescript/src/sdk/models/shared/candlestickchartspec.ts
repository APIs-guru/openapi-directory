import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CandlestickData } from "./candlestickdata";
import { CandlestickDomain } from "./candlestickdomain";



// CandlestickChartSpec
/** 
 * A candlestick chart.
**/
export class CandlestickChartSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: CandlestickData })
  data?: CandlestickData[];

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: CandlestickDomain;
}
