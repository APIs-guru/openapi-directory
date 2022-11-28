package shared

// LocationState
// Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
type LocationState struct {
	CanDelete              *bool `json:"canDelete,omitempty"`
	CanHaveFoodMenus       *bool `json:"canHaveFoodMenus,omitempty"`
	CanModifyServiceList   *bool `json:"canModifyServiceList,omitempty"`
	CanOperateHealthData   *bool `json:"canOperateHealthData,omitempty"`
	CanOperateLodgingData  *bool `json:"canOperateLodgingData,omitempty"`
	CanUpdate              *bool `json:"canUpdate,omitempty"`
	HasPendingEdits        *bool `json:"hasPendingEdits,omitempty"`
	HasPendingVerification *bool `json:"hasPendingVerification,omitempty"`
	IsDisabled             *bool `json:"isDisabled,omitempty"`
	IsDisconnected         *bool `json:"isDisconnected,omitempty"`
	IsDuplicate            *bool `json:"isDuplicate,omitempty"`
	IsGoogleUpdated        *bool `json:"isGoogleUpdated,omitempty"`
	IsLocalPostAPIDisabled *bool `json:"isLocalPostApiDisabled,omitempty"`
	IsPendingReview        *bool `json:"isPendingReview,omitempty"`
	IsPublished            *bool `json:"isPublished,omitempty"`
	IsSuspended            *bool `json:"isSuspended,omitempty"`
	IsVerified             *bool `json:"isVerified,omitempty"`
	NeedsReverification    *bool `json:"needsReverification,omitempty"`
}

// LocationStateInput
// Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
type LocationStateInput struct {
	CanDelete              *bool `json:"canDelete,omitempty"`
	CanUpdate              *bool `json:"canUpdate,omitempty"`
	HasPendingEdits        *bool `json:"hasPendingEdits,omitempty"`
	HasPendingVerification *bool `json:"hasPendingVerification,omitempty"`
	IsDisabled             *bool `json:"isDisabled,omitempty"`
	IsDisconnected         *bool `json:"isDisconnected,omitempty"`
	IsDuplicate            *bool `json:"isDuplicate,omitempty"`
	IsGoogleUpdated        *bool `json:"isGoogleUpdated,omitempty"`
	IsLocalPostAPIDisabled *bool `json:"isLocalPostApiDisabled,omitempty"`
	IsPendingReview        *bool `json:"isPendingReview,omitempty"`
	IsPublished            *bool `json:"isPublished,omitempty"`
	IsSuspended            *bool `json:"isSuspended,omitempty"`
	IsVerified             *bool `json:"isVerified,omitempty"`
	NeedsReverification    *bool `json:"needsReverification,omitempty"`
}
