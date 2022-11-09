import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QueryRequestInput } from "./queryrequestinput";


// QueryRequest
/** 
 * Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
**/
export class QueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentUserId" })
  agentUserId?: string;

  @Metadata({ data: "json, name=inputs", elemType: shared.QueryRequestInput })
  inputs?: QueryRequestInput[];

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
