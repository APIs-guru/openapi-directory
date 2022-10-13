package shared

type ListCollectionIdsRequest struct {
	PageSize  *int32  `json:"pageSize"`
	PageToken *string `json:"pageToken"`
	ReadTime  *string `json:"readTime"`
}
