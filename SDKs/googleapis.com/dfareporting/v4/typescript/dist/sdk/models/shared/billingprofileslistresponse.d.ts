import { SpeakeasyBase } from "../../../internal/utils";
import { BillingProfile } from "./billingprofile";
/**
 * Billing profile List Response
**/
export declare class BillingProfilesListResponse extends SpeakeasyBase {
    billingProfiles?: BillingProfile[];
    kind?: string;
    nextPageToken?: string;
}
