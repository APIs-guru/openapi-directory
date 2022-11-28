package shared

// NegativeKeywordListInput
// A list of negative keywords used for targeting.
type NegativeKeywordListInput struct {
	DisplayName *string `json:"displayName,omitempty"`
}

// NegativeKeywordList
// A list of negative keywords used for targeting.
type NegativeKeywordList struct {
	AdvertiserID          *string `json:"advertiserId,omitempty"`
	DisplayName           *string `json:"displayName,omitempty"`
	Name                  *string `json:"name,omitempty"`
	NegativeKeywordListID *string `json:"negativeKeywordListId,omitempty"`
	TargetedLineItemCount *string `json:"targetedLineItemCount,omitempty"`
}
