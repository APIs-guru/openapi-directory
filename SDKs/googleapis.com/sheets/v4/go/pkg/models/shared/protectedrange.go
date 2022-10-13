package shared

type ProtectedRange struct {
	Description           *string     `json:"description"`
	Editors               *Editors    `json:"editors"`
	NamedRangeID          *string     `json:"namedRangeId"`
	ProtectedRangeID      *int32      `json:"protectedRangeId"`
	Range                 *GridRange  `json:"range"`
	RequestingUserCanEdit *bool       `json:"requestingUserCanEdit"`
	UnprotectedRanges     []GridRange `json:"unprotectedRanges"`
	WarningOnly           *bool       `json:"warningOnly"`
}
