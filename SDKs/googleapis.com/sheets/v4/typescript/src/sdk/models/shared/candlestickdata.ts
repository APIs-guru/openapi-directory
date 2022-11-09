import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CandlestickSeries } from "./candlestickseries";
import { CandlestickSeries } from "./candlestickseries";
import { CandlestickSeries } from "./candlestickseries";
import { CandlestickSeries } from "./candlestickseries";


// CandlestickData
/** 
 * The Candlestick chart data, each containing the low, open, close, and high values for a series.
**/
export class CandlestickData extends SpeakeasyBase {
  @Metadata({ data: "json, name=closeSeries" })
  closeSeries?: CandlestickSeries;

  @Metadata({ data: "json, name=highSeries" })
  highSeries?: CandlestickSeries;

  @Metadata({ data: "json, name=lowSeries" })
  lowSeries?: CandlestickSeries;

  @Metadata({ data: "json, name=openSeries" })
  openSeries?: CandlestickSeries;
}
