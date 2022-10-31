package shared

type TechnologyTargeting struct {
	Browsers                []Browser                `json:"browsers,omitempty"`
	ConnectionTypes         []ConnectionType         `json:"connectionTypes,omitempty"`
	MobileCarriers          []MobileCarrier          `json:"mobileCarriers,omitempty"`
	OperatingSystemVersions []OperatingSystemVersion `json:"operatingSystemVersions,omitempty"`
	OperatingSystems        []OperatingSystem        `json:"operatingSystems,omitempty"`
	PlatformTypes           []PlatformType           `json:"platformTypes,omitempty"`
}
