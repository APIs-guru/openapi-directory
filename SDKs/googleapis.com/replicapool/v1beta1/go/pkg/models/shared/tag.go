package shared

// Tag
// A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.
type Tag struct {
	FingerPrint *string  `json:"fingerPrint,omitempty"`
	Items       []string `json:"items,omitempty"`
}
