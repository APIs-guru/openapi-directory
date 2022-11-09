import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRouteFaultInjectionPolicyAbort
/** 
 * Specification of how client requests are aborted as part of fault injection before being sent to a destination.
**/
export class HttpRouteFaultInjectionPolicyAbort extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpStatus" })
  httpStatus?: number;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;
}
