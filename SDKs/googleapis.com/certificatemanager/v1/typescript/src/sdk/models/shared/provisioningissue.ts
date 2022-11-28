import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProvisioningIssueReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    AuthorizationIssue = "AUTHORIZATION_ISSUE",
    RateLimited = "RATE_LIMITED"
}


// ProvisioningIssue
/** 
 * Information about issues with provisioning a Managed Certificate.
**/
export class ProvisioningIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: ProvisioningIssueReasonEnum;
}
