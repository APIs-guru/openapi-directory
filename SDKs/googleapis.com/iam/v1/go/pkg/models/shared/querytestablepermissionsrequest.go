package shared

type QueryTestablePermissionsRequest struct {
	FullResourceName *string `json:"fullResourceName"`
	PageSize         *int32  `json:"pageSize"`
	PageToken        *string `json:"pageToken"`
}
