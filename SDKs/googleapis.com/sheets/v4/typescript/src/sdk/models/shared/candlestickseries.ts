import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";



// CandlestickSeries
/** 
 * The series of a CandlestickData.
**/
export class CandlestickSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ChartData;
}
