import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyTopicEntry } from "./policytopicentry";

export enum PolicyComplianceStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    PendingReview = "PENDING_REVIEW"
,    Disapproved = "DISAPPROVED"
,    Approved = "APPROVED"
,    CertificateRequired = "CERTIFICATE_REQUIRED"
}


// PolicyCompliance
/** 
 * Policy compliance of the creative for a transaction type or a region.
**/
export class PolicyCompliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: PolicyComplianceStatusEnum;

  @Metadata({ data: "json, name=topics", elemType: shared.PolicyTopicEntry })
  topics?: PolicyTopicEntry[];
}
