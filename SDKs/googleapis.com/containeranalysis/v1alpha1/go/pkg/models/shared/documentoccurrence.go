package shared

// DocumentOccurrence
// DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/
type DocumentOccurrence struct {
	CreateTime           *string  `json:"createTime,omitempty"`
	CreatorComment       *string  `json:"creatorComment,omitempty"`
	Creators             []string `json:"creators,omitempty"`
	DocumentComment      *string  `json:"documentComment,omitempty"`
	ExternalDocumentRefs []string `json:"externalDocumentRefs,omitempty"`
	ID                   *string  `json:"id,omitempty"`
	LicenseListVersion   *string  `json:"licenseListVersion,omitempty"`
	Namespace            *string  `json:"namespace,omitempty"`
	Title                *string  `json:"title,omitempty"`
}
