package shared

type Detail struct {
	CpeURI             *string                `json:"cpeUri,omitempty"`
	Description        *string                `json:"description,omitempty"`
	FixedLocation      *VulnerabilityLocation `json:"fixedLocation,omitempty"`
	IsObsolete         *bool                  `json:"isObsolete,omitempty"`
	MaxAffectedVersion *Version               `json:"maxAffectedVersion,omitempty"`
	MinAffectedVersion *Version               `json:"minAffectedVersion,omitempty"`
	Package            *string                `json:"package,omitempty"`
	PackageType        *string                `json:"packageType,omitempty"`
	SeverityName       *string                `json:"severityName,omitempty"`
	Source             *string                `json:"source,omitempty"`
	SourceUpdateTime   *string                `json:"sourceUpdateTime,omitempty"`
	Vendor             *string                `json:"vendor,omitempty"`
}
