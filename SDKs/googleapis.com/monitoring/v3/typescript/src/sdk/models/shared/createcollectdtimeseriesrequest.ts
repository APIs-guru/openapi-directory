import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectdPayload } from "./collectdpayload";
import { MonitoredResource } from "./monitoredresource";



// CreateCollectdTimeSeriesRequest
/** 
 * The CreateCollectdTimeSeries request.
**/
export class CreateCollectdTimeSeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectdPayloads", elemType: CollectdPayload })
  collectdPayloads?: CollectdPayload[];

  @SpeakeasyMetadata({ data: "json, name=collectdVersion" })
  collectdVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: MonitoredResource;
}
