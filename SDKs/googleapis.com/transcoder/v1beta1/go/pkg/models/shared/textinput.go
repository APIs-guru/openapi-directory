package shared

// TextInput
// Identifies which input file and track should be used.
type TextInput struct {
	Key   *string `json:"key,omitempty"`
	Track *int32  `json:"track,omitempty"`
}
