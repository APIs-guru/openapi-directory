import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailoverContext } from "./failovercontext";


// InstancesFailoverRequest
/** 
 * Instance failover request.
**/
export class InstancesFailoverRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=failoverContext" })
  failoverContext?: FailoverContext;
}
