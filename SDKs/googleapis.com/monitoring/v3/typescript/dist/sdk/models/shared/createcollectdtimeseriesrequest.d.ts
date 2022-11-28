import { SpeakeasyBase } from "../../../internal/utils";
import { CollectdPayload } from "./collectdpayload";
import { MonitoredResource } from "./monitoredresource";
/**
 * The CreateCollectdTimeSeries request.
**/
export declare class CreateCollectdTimeSeriesRequest extends SpeakeasyBase {
    collectdPayloads?: CollectdPayload[];
    collectdVersion?: string;
    resource?: MonitoredResource;
}
