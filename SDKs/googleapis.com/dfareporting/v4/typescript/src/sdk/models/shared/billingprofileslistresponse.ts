import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillingProfile } from "./billingprofile";


// BillingProfilesListResponse
/** 
 * Billing profile List Response
**/
export class BillingProfilesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingProfiles", elemType: shared.BillingProfile })
  billingProfiles?: BillingProfile[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
