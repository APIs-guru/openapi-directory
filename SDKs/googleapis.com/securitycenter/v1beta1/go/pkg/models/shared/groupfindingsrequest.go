package shared

type GroupFindingsRequest struct {
	Filter    *string `json:"filter"`
	GroupBy   *string `json:"groupBy"`
	PageSize  *int32  `json:"pageSize"`
	PageToken *string `json:"pageToken"`
	ReadTime  *string `json:"readTime"`
}
