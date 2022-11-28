package shared

type UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum string

const (
	UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnumUserRewardedContentUnspecified     UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum = "USER_REWARDED_CONTENT_UNSPECIFIED"
	UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnumUserRewardedContentUserRewarded    UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum = "USER_REWARDED_CONTENT_USER_REWARDED"
	UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnumUserRewardedContentNotUserRewarded UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum = "USER_REWARDED_CONTENT_NOT_USER_REWARDED"
)

// UserRewardedContentAssignedTargetingOptionDetails
// User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
type UserRewardedContentAssignedTargetingOptionDetails struct {
	TargetingOptionID   *string                                                                   `json:"targetingOptionId,omitempty"`
	UserRewardedContent *UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContentEnum `json:"userRewardedContent,omitempty"`
}

// UserRewardedContentAssignedTargetingOptionDetailsInput
// User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.
type UserRewardedContentAssignedTargetingOptionDetailsInput struct {
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}
