import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteFaultInjectionPolicyDelay
/** 
 * Specification of how client requests are delayed as part of fault injection before being sent to a destination.
**/
export class HttpRouteFaultInjectionPolicyDelay extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedDelay" })
  fixedDelay?: string;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;
}
