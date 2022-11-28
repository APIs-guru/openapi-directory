import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CandlestickSeries } from "./candlestickseries";



// CandlestickData
/** 
 * The Candlestick chart data, each containing the low, open, close, and high values for a series.
**/
export class CandlestickData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closeSeries" })
  closeSeries?: CandlestickSeries;

  @SpeakeasyMetadata({ data: "json, name=highSeries" })
  highSeries?: CandlestickSeries;

  @SpeakeasyMetadata({ data: "json, name=lowSeries" })
  lowSeries?: CandlestickSeries;

  @SpeakeasyMetadata({ data: "json, name=openSeries" })
  openSeries?: CandlestickSeries;
}
