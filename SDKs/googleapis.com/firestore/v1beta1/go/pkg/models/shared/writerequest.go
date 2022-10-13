package shared

type WriteRequest struct {
	Labels      map[string]string `json:"labels"`
	StreamID    *string           `json:"streamId"`
	StreamToken *string           `json:"streamToken"`
	Writes      []Write           `json:"writes"`
}
