import { SpeakeasyBase } from "../../../internal/utils";
import { CandlestickSeries } from "./candlestickseries";
/**
 * The Candlestick chart data, each containing the low, open, close, and high values for a series.
**/
export declare class CandlestickData extends SpeakeasyBase {
    closeSeries?: CandlestickSeries;
    highSeries?: CandlestickSeries;
    lowSeries?: CandlestickSeries;
    openSeries?: CandlestickSeries;
}
