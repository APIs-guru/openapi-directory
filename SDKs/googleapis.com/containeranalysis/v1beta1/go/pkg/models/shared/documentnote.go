package shared

// DocumentNote
// DocumentNote represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/
type DocumentNote struct {
	DataLicence *string `json:"dataLicence,omitempty"`
	SpdxVersion *string `json:"spdxVersion,omitempty"`
}
