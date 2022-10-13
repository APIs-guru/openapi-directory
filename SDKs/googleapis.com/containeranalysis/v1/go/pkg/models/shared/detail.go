package shared

type Detail struct {
	AffectedCpeURI       *string  `json:"affectedCpeUri"`
	AffectedPackage      *string  `json:"affectedPackage"`
	AffectedVersionEnd   *Version `json:"affectedVersionEnd"`
	AffectedVersionStart *Version `json:"affectedVersionStart"`
	Description          *string  `json:"description"`
	FixedCpeURI          *string  `json:"fixedCpeUri"`
	FixedPackage         *string  `json:"fixedPackage"`
	FixedVersion         *Version `json:"fixedVersion"`
	IsObsolete           *bool    `json:"isObsolete"`
	PackageType          *string  `json:"packageType"`
	SeverityName         *string  `json:"severityName"`
	Source               *string  `json:"source"`
	SourceUpdateTime     *string  `json:"sourceUpdateTime"`
	Vendor               *string  `json:"vendor"`
}
