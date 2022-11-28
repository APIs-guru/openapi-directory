package shared

// SemanticVersion
// Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.
type SemanticVersion struct {
	MajorNumber *int64 `json:"majorNumber,omitempty"`
	MinorNumber *int64 `json:"minorNumber,omitempty"`
	Patch       *int64 `json:"patch,omitempty"`
}
