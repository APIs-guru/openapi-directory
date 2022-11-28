package shared

// Detail
// A detail for a distro and package affected by this vulnerability and its associated fix (if one is available).
type Detail struct {
	AffectedCpeURI       *string  `json:"affectedCpeUri,omitempty"`
	AffectedPackage      *string  `json:"affectedPackage,omitempty"`
	AffectedVersionEnd   *Version `json:"affectedVersionEnd,omitempty"`
	AffectedVersionStart *Version `json:"affectedVersionStart,omitempty"`
	Description          *string  `json:"description,omitempty"`
	FixedCpeURI          *string  `json:"fixedCpeUri,omitempty"`
	FixedPackage         *string  `json:"fixedPackage,omitempty"`
	FixedVersion         *Version `json:"fixedVersion,omitempty"`
	IsObsolete           *bool    `json:"isObsolete,omitempty"`
	PackageType          *string  `json:"packageType,omitempty"`
	SeverityName         *string  `json:"severityName,omitempty"`
	Source               *string  `json:"source,omitempty"`
	SourceUpdateTime     *string  `json:"sourceUpdateTime,omitempty"`
	Vendor               *string  `json:"vendor,omitempty"`
}
