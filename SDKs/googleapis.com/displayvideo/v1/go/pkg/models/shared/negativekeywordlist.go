package shared

type NegativeKeywordList struct {
	AdvertiserID          *string `json:"advertiserId,omitempty"`
	DisplayName           *string `json:"displayName,omitempty"`
	Name                  *string `json:"name,omitempty"`
	NegativeKeywordListID *string `json:"negativeKeywordListId,omitempty"`
	TargetedLineItemCount *string `json:"targetedLineItemCount,omitempty"`
}
