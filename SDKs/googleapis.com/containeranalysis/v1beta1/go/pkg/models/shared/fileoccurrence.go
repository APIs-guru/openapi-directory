package shared

type FileOccurrence struct {
	Attributions     []string `json:"attributions"`
	Comment          *string  `json:"comment"`
	Contributors     []string `json:"contributors"`
	Copyright        *string  `json:"copyright"`
	FilesLicenseInfo []string `json:"filesLicenseInfo"`
	ID               *string  `json:"id"`
	LicenseConcluded *License `json:"licenseConcluded"`
	Notice           *string  `json:"notice"`
}
