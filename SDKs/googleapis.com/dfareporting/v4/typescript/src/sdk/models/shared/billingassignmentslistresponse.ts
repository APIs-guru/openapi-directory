import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillingAssignment } from "./billingassignment";


// BillingAssignmentsListResponse
/** 
 * Billing assignment List Response
**/
export class BillingAssignmentsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingAssignments", elemType: shared.BillingAssignment })
  billingAssignments?: BillingAssignment[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
