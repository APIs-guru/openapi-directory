package shared

type PoliciesListResponse struct {
	Header        *ResponseHeader `json:"header"`
	Kind          *string         `json:"kind"`
	NextPageToken *string         `json:"nextPageToken"`
	Policies      []Policy        `json:"policies"`
}
