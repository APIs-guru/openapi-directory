package shared

// ListCollectionIdsRequest
// The request for Firestore.ListCollectionIds.
type ListCollectionIdsRequest struct {
	PageSize  *int32  `json:"pageSize,omitempty"`
	PageToken *string `json:"pageToken,omitempty"`
	ReadTime  *string `json:"readTime,omitempty"`
}
