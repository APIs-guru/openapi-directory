import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CollectdPayload } from "./collectdpayload";
import { MonitoredResource } from "./monitoredresource";


// CreateCollectdTimeSeriesRequest
/** 
 * The CreateCollectdTimeSeries request.
**/
export class CreateCollectdTimeSeriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectdPayloads", elemType: shared.CollectdPayload })
  collectdPayloads?: CollectdPayload[];

  @Metadata({ data: "json, name=collectdVersion" })
  collectdVersion?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: MonitoredResource;
}
