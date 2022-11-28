import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTopicEntry } from "./policytopicentry";
export declare enum PolicyComplianceStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    PendingReview = "PENDING_REVIEW",
    Disapproved = "DISAPPROVED",
    Approved = "APPROVED",
    CertificateRequired = "CERTIFICATE_REQUIRED"
}
/**
 * Policy compliance of the creative for a transaction type or a region.
**/
export declare class PolicyCompliance extends SpeakeasyBase {
    status?: PolicyComplianceStatusEnum;
    topics?: PolicyTopicEntry[];
}
