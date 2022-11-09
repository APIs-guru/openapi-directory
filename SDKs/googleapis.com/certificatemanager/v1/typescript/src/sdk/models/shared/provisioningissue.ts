import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProvisioningIssueReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED"
,    AuthorizationIssue = "AUTHORIZATION_ISSUE"
,    RateLimited = "RATE_LIMITED"
}


// ProvisioningIssue
/** 
 * Information about issues with provisioning a Managed Certificate.
**/
export class ProvisioningIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: ProvisioningIssueReasonEnum;
}
