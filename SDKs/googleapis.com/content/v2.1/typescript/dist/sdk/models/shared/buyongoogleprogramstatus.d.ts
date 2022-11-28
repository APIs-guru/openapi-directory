import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BuyOnGoogleProgramStatusBusinessModelEnum {
    BusinessModelUnspecified = "BUSINESS_MODEL_UNSPECIFIED",
    Manufacturer = "MANUFACTURER",
    Importer = "IMPORTER",
    Reseller = "RESELLER",
    Other = "OTHER"
}
export declare enum BuyOnGoogleProgramStatusOnlineSalesChannelEnum {
    OnlineSalesChannelUnspecified = "ONLINE_SALES_CHANNEL_UNSPECIFIED",
    GoogleExclusive = "GOOGLE_EXCLUSIVE",
    GoogleAndOtherWebsites = "GOOGLE_AND_OTHER_WEBSITES"
}
export declare enum BuyOnGoogleProgramStatusParticipationStageEnum {
    ProgramParticipationStageUnspecified = "PROGRAM_PARTICIPATION_STAGE_UNSPECIFIED",
    NotEligible = "NOT_ELIGIBLE",
    Eligible = "ELIGIBLE",
    Onboarding = "ONBOARDING",
    EligibleForReview = "ELIGIBLE_FOR_REVIEW",
    PendingReview = "PENDING_REVIEW",
    ReviewDisapproved = "REVIEW_DISAPPROVED",
    Active = "ACTIVE",
    Paused = "PAUSED"
}
/**
 * Response message for the GetProgramStatus method.
**/
export declare class BuyOnGoogleProgramStatus extends SpeakeasyBase {
    businessModel?: BuyOnGoogleProgramStatusBusinessModelEnum[];
    customerServicePendingEmail?: string;
    customerServicePendingPhoneNumber?: string;
    customerServicePendingPhoneRegionCode?: string;
    customerServiceVerifiedEmail?: string;
    customerServiceVerifiedPhoneNumber?: string;
    customerServiceVerifiedPhoneRegionCode?: string;
    onlineSalesChannel?: BuyOnGoogleProgramStatusOnlineSalesChannelEnum;
    participationStage?: BuyOnGoogleProgramStatusParticipationStageEnum;
}
/**
 * Response message for the GetProgramStatus method.
**/
export declare class BuyOnGoogleProgramStatusInput extends SpeakeasyBase {
    businessModel?: BuyOnGoogleProgramStatusBusinessModelEnum[];
    customerServicePendingEmail?: string;
    customerServicePendingPhoneNumber?: string;
    customerServicePendingPhoneRegionCode?: string;
    onlineSalesChannel?: BuyOnGoogleProgramStatusOnlineSalesChannelEnum;
}
