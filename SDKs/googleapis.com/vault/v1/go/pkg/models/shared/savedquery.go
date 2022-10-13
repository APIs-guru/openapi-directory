package shared

type SavedQuery struct {
	CreateTime   *string `json:"createTime"`
	DisplayName  *string `json:"displayName"`
	MatterID     *string `json:"matterId"`
	Query        *Query  `json:"query"`
	SavedQueryID *string `json:"savedQueryId"`
}
