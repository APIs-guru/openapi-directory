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
	CheckerType       *UptimeCheckConfigCheckerTypeEnum      `json:"checkerType"`
	ContentMatchers   []ContentMatcher                       `json:"contentMatchers"`
	DisplayName       *string                                `json:"displayName"`
	HTTPCheck         *HTTPCheck                             `json:"httpCheck"`
	InternalCheckers  []InternalChecker                      `json:"internalCheckers"`
	IsInternal        *bool                                  `json:"isInternal"`
	MonitoredResource *MonitoredResource                     `json:"monitoredResource"`
	Name              *string                                `json:"name"`
	Period            *string                                `json:"period"`
	ResourceGroup     *ResourceGroup                         `json:"resourceGroup"`
	SelectedRegions   []UptimeCheckConfigSelectedRegionsEnum `json:"selectedRegions"`
	TCPCheck          *TCPCheck                              `json:"tcpCheck"`
	Timeout           *string                                `json:"timeout"`
	UserLabels        map[string]string                      `json:"userLabels"`
}
