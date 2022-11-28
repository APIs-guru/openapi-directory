import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestSyncDevicesRequest
/** 
 * Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.
**/
export class RequestSyncDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentUserId" })
  agentUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=async" })
  async?: boolean;
}
