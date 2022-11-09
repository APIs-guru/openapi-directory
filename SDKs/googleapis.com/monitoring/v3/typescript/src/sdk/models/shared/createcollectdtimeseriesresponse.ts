import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CollectdPayloadError } from "./collectdpayloaderror";
import { CreateTimeSeriesSummary } from "./createtimeseriessummary";


// CreateCollectdTimeSeriesResponse
/** 
 * The CreateCollectdTimeSeries response.
**/
export class CreateCollectdTimeSeriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=payloadErrors", elemType: shared.CollectdPayloadError })
  payloadErrors?: CollectdPayloadError[];

  @Metadata({ data: "json, name=summary" })
  summary?: CreateTimeSeriesSummary;
}
