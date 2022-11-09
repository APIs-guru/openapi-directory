import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProvisioningIssueReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    AuthorizationIssue = "AUTHORIZATION_ISSUE",
    RateLimited = "RATE_LIMITED"
}
/**
 * Information about issues with provisioning a Managed Certificate.
**/
export declare class ProvisioningIssue extends SpeakeasyBase {
    details?: string;
    reason?: ProvisioningIssueReasonEnum;
}
