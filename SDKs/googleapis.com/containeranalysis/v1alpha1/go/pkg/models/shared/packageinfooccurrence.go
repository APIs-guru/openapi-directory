package shared

type PackageInfoOccurrence struct {
	Comment            *string  `json:"comment,omitempty"`
	Filename           *string  `json:"filename,omitempty"`
	HomePage           *string  `json:"homePage,omitempty"`
	ID                 *string  `json:"id,omitempty"`
	LicenseConcluded   *License `json:"licenseConcluded,omitempty"`
	PackageType        *string  `json:"packageType,omitempty"`
	SourceInfo         *string  `json:"sourceInfo,omitempty"`
	SummaryDescription *string  `json:"summaryDescription,omitempty"`
	Title              *string  `json:"title,omitempty"`
	Version            *string  `json:"version,omitempty"`
}
