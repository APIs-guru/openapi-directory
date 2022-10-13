package shared

type ListGroupsResponse struct {
	Errors        *Errors `json:"errors"`
	Etag          *string `json:"etag"`
	Items         []Group `json:"items"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}
