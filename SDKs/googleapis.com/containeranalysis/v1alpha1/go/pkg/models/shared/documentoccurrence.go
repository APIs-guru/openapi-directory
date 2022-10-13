package shared

type DocumentOccurrence struct {
	CreateTime           *string  `json:"createTime"`
	CreatorComment       *string  `json:"creatorComment"`
	Creators             []string `json:"creators"`
	DocumentComment      *string  `json:"documentComment"`
	ExternalDocumentRefs []string `json:"externalDocumentRefs"`
	ID                   *string  `json:"id"`
	LicenseListVersion   *string  `json:"licenseListVersion"`
	Namespace            *string  `json:"namespace"`
	Title                *string  `json:"title"`
}
