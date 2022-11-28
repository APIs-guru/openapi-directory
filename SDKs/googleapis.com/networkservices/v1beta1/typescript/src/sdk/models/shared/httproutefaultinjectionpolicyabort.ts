import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteFaultInjectionPolicyAbort
/** 
 * Specification of how client requests are aborted as part of fault injection before being sent to a destination.
**/
export class HttpRouteFaultInjectionPolicyAbort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpStatus" })
  httpStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;
}
