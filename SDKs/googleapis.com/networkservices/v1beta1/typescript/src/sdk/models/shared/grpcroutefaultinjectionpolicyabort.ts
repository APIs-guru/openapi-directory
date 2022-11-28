import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GrpcRouteFaultInjectionPolicyAbort
/** 
 * Specification of how client requests are aborted as part of fault injection before being sent to a destination.
**/
export class GrpcRouteFaultInjectionPolicyAbort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpStatus" })
  httpStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;
}
