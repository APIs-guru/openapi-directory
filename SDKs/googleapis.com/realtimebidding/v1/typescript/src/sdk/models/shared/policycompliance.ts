import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTopicEntry } from "./policytopicentry";


export enum PolicyComplianceStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    PendingReview = "PENDING_REVIEW",
    Disapproved = "DISAPPROVED",
    Approved = "APPROVED",
    CertificateRequired = "CERTIFICATE_REQUIRED"
}


// PolicyCompliance
/** 
 * Policy compliance of the creative for a transaction type or a region.
**/
export class PolicyCompliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PolicyComplianceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=topics", elemType: PolicyTopicEntry })
  topics?: PolicyTopicEntry[];
}
