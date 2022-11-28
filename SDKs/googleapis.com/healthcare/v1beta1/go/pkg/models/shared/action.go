package shared

// Action
// Specifies a selection of tags and an `Action` to apply to each one.
type Action struct {
	CleanImageTag *ImageConfig           `json:"cleanImageTag,omitempty"`
	CleanTextTag  map[string]interface{} `json:"cleanTextTag,omitempty"`
	DeleteTag     map[string]interface{} `json:"deleteTag,omitempty"`
	KeepTag       map[string]interface{} `json:"keepTag,omitempty"`
	Queries       []string               `json:"queries,omitempty"`
	RecurseTag    map[string]interface{} `json:"recurseTag,omitempty"`
	RegenUIDTag   map[string]interface{} `json:"regenUidTag,omitempty"`
	RemoveTag     map[string]interface{} `json:"removeTag,omitempty"`
	ResetTag      map[string]interface{} `json:"resetTag,omitempty"`
}
