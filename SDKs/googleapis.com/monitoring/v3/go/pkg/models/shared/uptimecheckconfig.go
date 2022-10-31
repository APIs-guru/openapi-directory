package shared

type UptimeCheckConfigCheckerTypeEnum string

const (
	UptimeCheckConfigCheckerTypeEnumCheckerTypeUnspecified UptimeCheckConfigCheckerTypeEnum = "CHECKER_TYPE_UNSPECIFIED"
	UptimeCheckConfigCheckerTypeEnumStaticIPCheckers       UptimeCheckConfigCheckerTypeEnum = "STATIC_IP_CHECKERS"
	UptimeCheckConfigCheckerTypeEnumVpcCheckers            UptimeCheckConfigCheckerTypeEnum = "VPC_CHECKERS"
)

type UptimeCheckConfigSelectedRegionsEnum string

const (
	UptimeCheckConfigSelectedRegionsEnumRegionUnspecified UptimeCheckConfigSelectedRegionsEnum = "REGION_UNSPECIFIED"
	UptimeCheckConfigSelectedRegionsEnumUsa               UptimeCheckConfigSelectedRegionsEnum = "USA"
	UptimeCheckConfigSelectedRegionsEnumEurope            UptimeCheckConfigSelectedRegionsEnum = "EUROPE"
	UptimeCheckConfigSelectedRegionsEnumSouthAmerica      UptimeCheckConfigSelectedRegionsEnum = "SOUTH_AMERICA"
	UptimeCheckConfigSelectedRegionsEnumAsiaPacific       UptimeCheckConfigSelectedRegionsEnum = "ASIA_PACIFIC"
)

type UptimeCheckConfig struct {
	CheckerType       *UptimeCheckConfigCheckerTypeEnum      `json:"checkerType,omitempty"`
	ContentMatchers   []ContentMatcher                       `json:"contentMatchers,omitempty"`
	DisplayName       *string                                `json:"displayName,omitempty"`
	HTTPCheck         *HTTPCheck                             `json:"httpCheck,omitempty"`
	InternalCheckers  []InternalChecker                      `json:"internalCheckers,omitempty"`
	IsInternal        *bool                                  `json:"isInternal,omitempty"`
	MonitoredResource *MonitoredResource                     `json:"monitoredResource,omitempty"`
	Name              *string                                `json:"name,omitempty"`
	Period            *string                                `json:"period,omitempty"`
	ResourceGroup     *ResourceGroup                         `json:"resourceGroup,omitempty"`
	SelectedRegions   []UptimeCheckConfigSelectedRegionsEnum `json:"selectedRegions,omitempty"`
	TCPCheck          *TCPCheck                              `json:"tcpCheck,omitempty"`
	Timeout           *string                                `json:"timeout,omitempty"`
	UserLabels        map[string]string                      `json:"userLabels,omitempty"`
}
