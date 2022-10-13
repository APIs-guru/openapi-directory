package shared

type SearchFoldersRequest struct {
	PageSize  *int32  `json:"pageSize"`
	PageToken *string `json:"pageToken"`
	Query     *string `json:"query"`
}
