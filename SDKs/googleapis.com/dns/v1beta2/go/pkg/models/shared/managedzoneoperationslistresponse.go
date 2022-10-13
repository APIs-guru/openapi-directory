package shared

type ManagedZoneOperationsListResponse struct {
	Header        *ResponseHeader `json:"header"`
	Kind          *string         `json:"kind"`
	NextPageToken *string         `json:"nextPageToken"`
	Operations    []Operation     `json:"operations"`
}
