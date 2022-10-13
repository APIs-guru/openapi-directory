package shared

type SearchItemsByViewURLRequest struct {
	DebugOptions *DebugOptions `json:"debugOptions"`
	PageToken    *string       `json:"pageToken"`
	ViewURL      *string       `json:"viewUrl"`
}
