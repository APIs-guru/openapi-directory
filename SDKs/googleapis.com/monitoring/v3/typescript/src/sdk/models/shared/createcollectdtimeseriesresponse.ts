import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectdPayloadError } from "./collectdpayloaderror";
import { CreateTimeSeriesSummary } from "./createtimeseriessummary";



// CreateCollectdTimeSeriesResponse
/** 
 * The CreateCollectdTimeSeries response.
**/
export class CreateCollectdTimeSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payloadErrors", elemType: CollectdPayloadError })
  payloadErrors?: CollectdPayloadError[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: CreateTimeSeriesSummary;
}
