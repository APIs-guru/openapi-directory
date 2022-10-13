package shared

type ChangesListResponse struct {
	Changes       []Change        `json:"changes"`
	Header        *ResponseHeader `json:"header"`
	Kind          *string         `json:"kind"`
	NextPageToken *string         `json:"nextPageToken"`
}
