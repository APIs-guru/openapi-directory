import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    PendingTosAcceptance = "PENDING_TOS_ACCEPTANCE",
    SkuNotEligible = "SKU_NOT_ELIGIBLE",
    SkuSuspended = "SKU_SUSPENDED"
}


// GoogleCloudChannelV1TransferEligibility
/** 
 * Specifies transfer eligibility of a SKU.
**/
export class GoogleCloudChannelV1TransferEligibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ineligibilityReason" })
  ineligibilityReason?: GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=isEligible" })
  isEligible?: boolean;
}
