import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRouteFaultInjectionPolicyDelay
/** 
 * Specification of how client requests are delayed as part of fault injection before being sent to a destination.
**/
export class HttpRouteFaultInjectionPolicyDelay extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedDelay" })
  fixedDelay?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;
}
