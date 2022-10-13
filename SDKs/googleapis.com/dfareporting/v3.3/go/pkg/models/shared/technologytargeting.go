package shared

type TechnologyTargeting struct {
	Browsers                []Browser                `json:"browsers"`
	ConnectionTypes         []ConnectionType         `json:"connectionTypes"`
	MobileCarriers          []MobileCarrier          `json:"mobileCarriers"`
	OperatingSystemVersions []OperatingSystemVersion `json:"operatingSystemVersions"`
	OperatingSystems        []OperatingSystem        `json:"operatingSystems"`
	PlatformTypes           []PlatformType           `json:"platformTypes"`
}
