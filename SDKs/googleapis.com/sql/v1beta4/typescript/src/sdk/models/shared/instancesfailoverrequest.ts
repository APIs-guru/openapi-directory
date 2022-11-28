import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailoverContext } from "./failovercontext";



// InstancesFailoverRequest
/** 
 * Instance failover request.
**/
export class InstancesFailoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failoverContext" })
  failoverContext?: FailoverContext;
}
