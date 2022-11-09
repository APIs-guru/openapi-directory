import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserRewardedContentTargetingOptionDetailsUserRewardedContentEnum {
    UserRewardedContentUnspecified = "USER_REWARDED_CONTENT_UNSPECIFIED"
,    UserRewardedContentUserRewarded = "USER_REWARDED_CONTENT_USER_REWARDED"
,    UserRewardedContentNotUserRewarded = "USER_REWARDED_CONTENT_NOT_USER_REWARDED"
}


// UserRewardedContentTargetingOptionDetails
/** 
 * Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
**/
export class UserRewardedContentTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=userRewardedContent" })
  userRewardedContent?: UserRewardedContentTargetingOptionDetailsUserRewardedContentEnum;
}
