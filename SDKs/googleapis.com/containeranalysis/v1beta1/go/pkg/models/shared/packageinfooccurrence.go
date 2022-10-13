package shared

type PackageInfoOccurrence struct {
	Comment            *string  `json:"comment"`
	Filename           *string  `json:"filename"`
	HomePage           *string  `json:"homePage"`
	ID                 *string  `json:"id"`
	LicenseConcluded   *License `json:"licenseConcluded"`
	PackageType        *string  `json:"packageType"`
	SourceInfo         *string  `json:"sourceInfo"`
	SummaryDescription *string  `json:"summaryDescription"`
	Title              *string  `json:"title"`
	Version            *string  `json:"version"`
}
