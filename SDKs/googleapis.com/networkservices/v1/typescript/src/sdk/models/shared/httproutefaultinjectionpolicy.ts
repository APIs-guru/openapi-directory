import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteFaultInjectionPolicyAbort } from "./httproutefaultinjectionpolicyabort";
import { HttpRouteFaultInjectionPolicyDelay } from "./httproutefaultinjectionpolicydelay";



// HttpRouteFaultInjectionPolicy
/** 
 * The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests.
**/
export class HttpRouteFaultInjectionPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abort" })
  abort?: HttpRouteFaultInjectionPolicyAbort;

  @SpeakeasyMetadata({ data: "json, name=delay" })
  delay?: HttpRouteFaultInjectionPolicyDelay;
}
