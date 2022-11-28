import { SpeakeasyBase } from "../../../internal/utils";
import { BillingAssignment } from "./billingassignment";
/**
 * Billing assignment List Response
**/
export declare class BillingAssignmentsListResponse extends SpeakeasyBase {
    billingAssignments?: BillingAssignment[];
    kind?: string;
}
