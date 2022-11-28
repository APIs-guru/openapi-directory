import { SpeakeasyBase } from "../../../internal/utils";
import { CollectdPayloadError } from "./collectdpayloaderror";
import { CreateTimeSeriesSummary } from "./createtimeseriessummary";
/**
 * The CreateCollectdTimeSeries response.
**/
export declare class CreateCollectdTimeSeriesResponse extends SpeakeasyBase {
    payloadErrors?: CollectdPayloadError[];
    summary?: CreateTimeSeriesSummary;
}
