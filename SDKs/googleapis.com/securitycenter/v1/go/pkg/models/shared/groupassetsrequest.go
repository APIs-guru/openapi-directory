package shared

type GroupAssetsRequest struct {
	CompareDuration *string `json:"compareDuration"`
	Filter          *string `json:"filter"`
	GroupBy         *string `json:"groupBy"`
	PageSize        *int32  `json:"pageSize"`
	PageToken       *string `json:"pageToken"`
	ReadTime        *string `json:"readTime"`
}
