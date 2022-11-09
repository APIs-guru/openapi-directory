import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestSyncDevicesRequest
/** 
 * Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.
**/
export class RequestSyncDevicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentUserId" })
  agentUserId?: string;

  @Metadata({ data: "json, name=async" })
  async?: boolean;
}
