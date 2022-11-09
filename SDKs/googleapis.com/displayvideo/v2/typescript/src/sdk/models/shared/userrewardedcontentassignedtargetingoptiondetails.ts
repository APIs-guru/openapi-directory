import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum {
    UserRewardedContentUnspecified = "USER_REWARDED_CONTENT_UNSPECIFIED"
,    UserRewardedContentUserRewarded = "USER_REWARDED_CONTENT_USER_REWARDED"
,    UserRewardedContentNotUserRewarded = "USER_REWARDED_CONTENT_NOT_USER_REWARDED"
}


// UserRewardedContentAssignedTargetingOptionDetails
/** 
 * User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
**/
export class UserRewardedContentAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;

  @Metadata({ data: "json, name=userRewardedContent" })
  userRewardedContent?: UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum;
}
