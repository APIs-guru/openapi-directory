import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryRequestInput } from "./queryrequestinput";



// QueryRequest
/** 
 * Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
**/
export class QueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentUserId" })
  agentUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: QueryRequestInput })
  inputs?: QueryRequestInput[];

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
