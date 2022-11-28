package shared

// Metadata
// Additional non-user-editable information about the location.
type Metadata struct {
	CanDelete             *bool   `json:"canDelete,omitempty"`
	CanHaveBusinessCalls  *bool   `json:"canHaveBusinessCalls,omitempty"`
	CanHaveFoodMenus      *bool   `json:"canHaveFoodMenus,omitempty"`
	CanModifyServiceList  *bool   `json:"canModifyServiceList,omitempty"`
	CanOperateHealthData  *bool   `json:"canOperateHealthData,omitempty"`
	CanOperateLocalPost   *bool   `json:"canOperateLocalPost,omitempty"`
	CanOperateLodgingData *bool   `json:"canOperateLodgingData,omitempty"`
	DuplicateLocation     *string `json:"duplicateLocation,omitempty"`
	HasGoogleUpdated      *bool   `json:"hasGoogleUpdated,omitempty"`
	HasPendingEdits       *bool   `json:"hasPendingEdits,omitempty"`
	HasVoiceOfMerchant    *bool   `json:"hasVoiceOfMerchant,omitempty"`
	MapsURI               *string `json:"mapsUri,omitempty"`
	NewReviewURI          *string `json:"newReviewUri,omitempty"`
	PlaceID               *string `json:"placeId,omitempty"`
}
