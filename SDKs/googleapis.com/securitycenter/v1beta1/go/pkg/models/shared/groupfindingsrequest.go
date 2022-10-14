package shared

type GroupFindingsRequest struct {
	Filter    *string `json:"filter,omitempty"`
	GroupBy   *string `json:"groupBy,omitempty"`
	PageSize  *int32  `json:"pageSize,omitempty"`
	PageToken *string `json:"pageToken,omitempty"`
	ReadTime  *string `json:"readTime,omitempty"`
}
