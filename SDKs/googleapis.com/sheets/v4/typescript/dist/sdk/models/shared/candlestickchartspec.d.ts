import { SpeakeasyBase } from "../../../internal/utils";
import { CandlestickData } from "./candlestickdata";
import { CandlestickDomain } from "./candlestickdomain";
/**
 * A candlestick chart.
**/
export declare class CandlestickChartSpec extends SpeakeasyBase {
    data?: CandlestickData[];
    domain?: CandlestickDomain;
}
