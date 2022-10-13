package shared

type Detail struct {
	CpeURI             *string                `json:"cpeUri"`
	Description        *string                `json:"description"`
	FixedLocation      *VulnerabilityLocation `json:"fixedLocation"`
	IsObsolete         *bool                  `json:"isObsolete"`
	MaxAffectedVersion *Version               `json:"maxAffectedVersion"`
	MinAffectedVersion *Version               `json:"minAffectedVersion"`
	Package            *string                `json:"package"`
	PackageType        *string                `json:"packageType"`
	SeverityName       *string                `json:"severityName"`
	Source             *string                `json:"source"`
	Vendor             *string                `json:"vendor"`
}
