import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChartData } from "./chartdata";


// CandlestickSeries
/** 
 * The series of a CandlestickData.
**/
export class CandlestickSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: ChartData;
}
