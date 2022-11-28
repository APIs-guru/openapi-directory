import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingAssignment } from "./billingassignment";



// BillingAssignmentsListResponse
/** 
 * Billing assignment List Response
**/
export class BillingAssignmentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingAssignments", elemType: BillingAssignment })
  billingAssignments?: BillingAssignment[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
