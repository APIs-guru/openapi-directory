import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    PendingTosAcceptance = "PENDING_TOS_ACCEPTANCE",
    SkuNotEligible = "SKU_NOT_ELIGIBLE",
    SkuSuspended = "SKU_SUSPENDED"
}
/**
 * Specifies transfer eligibility of a SKU.
**/
export declare class GoogleCloudChannelV1TransferEligibility extends SpeakeasyBase {
    description?: string;
    ineligibilityReason?: GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum;
    isEligible?: boolean;
}
