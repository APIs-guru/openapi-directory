import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteFaultInjectionPolicyAbort } from "./grpcroutefaultinjectionpolicyabort";
import { GrpcRouteFaultInjectionPolicyDelay } from "./grpcroutefaultinjectionpolicydelay";



// GrpcRouteFaultInjectionPolicy
/** 
 * The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests.
**/
export class GrpcRouteFaultInjectionPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abort" })
  abort?: GrpcRouteFaultInjectionPolicyAbort;

  @SpeakeasyMetadata({ data: "json, name=delay" })
  delay?: GrpcRouteFaultInjectionPolicyDelay;
}
