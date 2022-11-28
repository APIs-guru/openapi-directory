import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserRewardedContentTargetingOptionDetailsUserRewardedContentEnum {
    UserRewardedContentUnspecified = "USER_REWARDED_CONTENT_UNSPECIFIED",
    UserRewardedContentUserRewarded = "USER_REWARDED_CONTENT_USER_REWARDED",
    UserRewardedContentNotUserRewarded = "USER_REWARDED_CONTENT_NOT_USER_REWARDED"
}
/**
 * Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
**/
export declare class UserRewardedContentTargetingOptionDetails extends SpeakeasyBase {
    userRewardedContent?: UserRewardedContentTargetingOptionDetailsUserRewardedContentEnum;
}
