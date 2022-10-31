package shared

type ListCollectionIdsRequest struct {
	PageSize  *int32  `json:"pageSize,omitempty"`
	PageToken *string `json:"pageToken,omitempty"`
	ReadTime  *string `json:"readTime,omitempty"`
}
