package shared

type PackageInfoNote struct {
	Analyzed            *bool         `json:"analyzed"`
	Attribution         *string       `json:"attribution"`
	Checksum            *string       `json:"checksum"`
	Copyright           *string       `json:"copyright"`
	DetailedDescription *string       `json:"detailedDescription"`
	DownloadLocation    *string       `json:"downloadLocation"`
	ExternalRefs        []ExternalRef `json:"externalRefs"`
	FilesLicenseInfo    []string      `json:"filesLicenseInfo"`
	HomePage            *string       `json:"homePage"`
	LicenseDeclared     *License      `json:"licenseDeclared"`
	Originator          *string       `json:"originator"`
	PackageType         *string       `json:"packageType"`
	SummaryDescription  *string       `json:"summaryDescription"`
	Supplier            *string       `json:"supplier"`
	Title               *string       `json:"title"`
	VerificationCode    *string       `json:"verificationCode"`
	Version             *string       `json:"version"`
}
