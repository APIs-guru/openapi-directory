package shared

type LocationState struct {
	CanDelete              *bool `json:"canDelete"`
	CanHaveFoodMenus       *bool `json:"canHaveFoodMenus"`
	CanModifyServiceList   *bool `json:"canModifyServiceList"`
	CanOperateHealthData   *bool `json:"canOperateHealthData"`
	CanOperateLodgingData  *bool `json:"canOperateLodgingData"`
	CanUpdate              *bool `json:"canUpdate"`
	HasPendingEdits        *bool `json:"hasPendingEdits"`
	HasPendingVerification *bool `json:"hasPendingVerification"`
	IsDisabled             *bool `json:"isDisabled"`
	IsDisconnected         *bool `json:"isDisconnected"`
	IsDuplicate            *bool `json:"isDuplicate"`
	IsGoogleUpdated        *bool `json:"isGoogleUpdated"`
	IsLocalPostAPIDisabled *bool `json:"isLocalPostApiDisabled"`
	IsPendingReview        *bool `json:"isPendingReview"`
	IsPublished            *bool `json:"isPublished"`
	IsSuspended            *bool `json:"isSuspended"`
	IsVerified             *bool `json:"isVerified"`
	NeedsReverification    *bool `json:"needsReverification"`
}
