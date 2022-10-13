package shared

type Metadata struct {
	CanDelete             *bool   `json:"canDelete"`
	CanHaveBusinessCalls  *bool   `json:"canHaveBusinessCalls"`
	CanHaveFoodMenus      *bool   `json:"canHaveFoodMenus"`
	CanModifyServiceList  *bool   `json:"canModifyServiceList"`
	CanOperateHealthData  *bool   `json:"canOperateHealthData"`
	CanOperateLocalPost   *bool   `json:"canOperateLocalPost"`
	CanOperateLodgingData *bool   `json:"canOperateLodgingData"`
	DuplicateLocation     *string `json:"duplicateLocation"`
	HasGoogleUpdated      *bool   `json:"hasGoogleUpdated"`
	HasPendingEdits       *bool   `json:"hasPendingEdits"`
	HasVoiceOfMerchant    *bool   `json:"hasVoiceOfMerchant"`
	MapsURI               *string `json:"mapsUri"`
	NewReviewURI          *string `json:"newReviewUri"`
	PlaceID               *string `json:"placeId"`
}
