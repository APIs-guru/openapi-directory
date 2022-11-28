package shared

// Create
// An object was created.
type Create struct {
	Copy   *Copy                  `json:"copy,omitempty"`
	New    map[string]interface{} `json:"new,omitempty"`
	Upload map[string]interface{} `json:"upload,omitempty"`
}
