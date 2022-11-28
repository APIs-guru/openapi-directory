package shared

// Copy
// An object was created by copying an existing object.
type Copy struct {
	OriginalObject *TargetReference `json:"originalObject,omitempty"`
}
