import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SyncRequest
/** 
 * Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.
**/
export class SyncRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentUserId" })
  agentUserId?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
