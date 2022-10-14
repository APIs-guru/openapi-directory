package shared

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
