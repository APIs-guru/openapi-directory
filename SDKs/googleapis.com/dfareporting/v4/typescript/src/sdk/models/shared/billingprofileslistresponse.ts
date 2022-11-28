import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingProfile } from "./billingprofile";



// BillingProfilesListResponse
/** 
 * Billing profile List Response
**/
export class BillingProfilesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingProfiles", elemType: BillingProfile })
  billingProfiles?: BillingProfile[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
