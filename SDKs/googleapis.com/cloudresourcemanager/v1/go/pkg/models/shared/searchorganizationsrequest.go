package shared

type SearchOrganizationsRequest struct {
	Filter    *string `json:"filter"`
	PageSize  *int32  `json:"pageSize"`
	PageToken *string `json:"pageToken"`
}
