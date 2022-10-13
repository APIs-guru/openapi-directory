package shared

type BulkListAssignedTargetingOptionsResponse struct {
	LineItemAssignedTargetingOptions []LineItemAssignedTargetingOption `json:"lineItemAssignedTargetingOptions"`
	NextPageToken                    *string                           `json:"nextPageToken"`
}
