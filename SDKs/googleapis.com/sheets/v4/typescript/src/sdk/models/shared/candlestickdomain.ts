import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";



// CandlestickDomain
/** 
 * The domain of a CandlestickChart.
**/
export class CandlestickDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=reversed" })
  reversed?: boolean;
}
