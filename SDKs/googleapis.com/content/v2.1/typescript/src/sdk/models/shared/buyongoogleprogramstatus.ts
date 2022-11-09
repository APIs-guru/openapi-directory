import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BuyOnGoogleProgramStatusBusinessModelEnum {
    BusinessModelUnspecified = "BUSINESS_MODEL_UNSPECIFIED"
,    Manufacturer = "MANUFACTURER"
,    Importer = "IMPORTER"
,    Reseller = "RESELLER"
,    Other = "OTHER"
}

export enum BuyOnGoogleProgramStatusOnlineSalesChannelEnum {
    OnlineSalesChannelUnspecified = "ONLINE_SALES_CHANNEL_UNSPECIFIED"
,    GoogleExclusive = "GOOGLE_EXCLUSIVE"
,    GoogleAndOtherWebsites = "GOOGLE_AND_OTHER_WEBSITES"
}

export enum BuyOnGoogleProgramStatusParticipationStageEnum {
    ProgramParticipationStageUnspecified = "PROGRAM_PARTICIPATION_STAGE_UNSPECIFIED"
,    NotEligible = "NOT_ELIGIBLE"
,    Eligible = "ELIGIBLE"
,    Onboarding = "ONBOARDING"
,    EligibleForReview = "ELIGIBLE_FOR_REVIEW"
,    PendingReview = "PENDING_REVIEW"
,    ReviewDisapproved = "REVIEW_DISAPPROVED"
,    Active = "ACTIVE"
,    Paused = "PAUSED"
}


// BuyOnGoogleProgramStatus
/** 
 * Response message for the GetProgramStatus method.
**/
export class BuyOnGoogleProgramStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessModel" })
  businessModel?: BuyOnGoogleProgramStatusBusinessModelEnum[];

  @Metadata({ data: "json, name=customerServicePendingEmail" })
  customerServicePendingEmail?: string;

  @Metadata({ data: "json, name=customerServicePendingPhoneNumber" })
  customerServicePendingPhoneNumber?: string;

  @Metadata({ data: "json, name=customerServicePendingPhoneRegionCode" })
  customerServicePendingPhoneRegionCode?: string;

  @Metadata({ data: "json, name=customerServiceVerifiedEmail" })
  customerServiceVerifiedEmail?: string;

  @Metadata({ data: "json, name=customerServiceVerifiedPhoneNumber" })
  customerServiceVerifiedPhoneNumber?: string;

  @Metadata({ data: "json, name=customerServiceVerifiedPhoneRegionCode" })
  customerServiceVerifiedPhoneRegionCode?: string;

  @Metadata({ data: "json, name=onlineSalesChannel" })
  onlineSalesChannel?: BuyOnGoogleProgramStatusOnlineSalesChannelEnum;

  @Metadata({ data: "json, name=participationStage" })
  participationStage?: BuyOnGoogleProgramStatusParticipationStageEnum;
}
