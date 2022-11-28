package shared

// ProtectedRange
// A protected range.
type ProtectedRange struct {
	Description           *string     `json:"description,omitempty"`
	Editors               *Editors    `json:"editors,omitempty"`
	NamedRangeID          *string     `json:"namedRangeId,omitempty"`
	ProtectedRangeID      *int32      `json:"protectedRangeId,omitempty"`
	Range                 *GridRange  `json:"range,omitempty"`
	RequestingUserCanEdit *bool       `json:"requestingUserCanEdit,omitempty"`
	UnprotectedRanges     []GridRange `json:"unprotectedRanges,omitempty"`
	WarningOnly           *bool       `json:"warningOnly,omitempty"`
}
