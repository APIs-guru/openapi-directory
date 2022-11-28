import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum {
    UserRewardedContentUnspecified = "USER_REWARDED_CONTENT_UNSPECIFIED",
    UserRewardedContentUserRewarded = "USER_REWARDED_CONTENT_USER_REWARDED",
    UserRewardedContentNotUserRewarded = "USER_REWARDED_CONTENT_NOT_USER_REWARDED"
}
/**
 * User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
**/
export declare class UserRewardedContentAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    targetingOptionId?: string;
}
/**
 * User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
**/
export declare class UserRewardedContentAssignedTargetingOptionDetails extends SpeakeasyBase {
    targetingOptionId?: string;
    userRewardedContent?: UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum;
}
