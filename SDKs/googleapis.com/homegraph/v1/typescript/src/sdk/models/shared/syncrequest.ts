import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SyncRequest
/** 
 * Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.
**/
export class SyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentUserId" })
  agentUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
