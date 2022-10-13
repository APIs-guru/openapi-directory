package shared

type ReturnaddressListResponse struct {
	Kind          *string         `json:"kind"`
	NextPageToken *string         `json:"nextPageToken"`
	Resources     []ReturnAddress `json:"resources"`
}
