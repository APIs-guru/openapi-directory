package shared

type UptimeCheckIPRegionEnum string

const (
	UptimeCheckIPRegionEnumRegionUnspecified UptimeCheckIPRegionEnum = "REGION_UNSPECIFIED"
	UptimeCheckIPRegionEnumUsa               UptimeCheckIPRegionEnum = "USA"
	UptimeCheckIPRegionEnumEurope            UptimeCheckIPRegionEnum = "EUROPE"
	UptimeCheckIPRegionEnumSouthAmerica      UptimeCheckIPRegionEnum = "SOUTH_AMERICA"
	UptimeCheckIPRegionEnumAsiaPacific       UptimeCheckIPRegionEnum = "ASIA_PACIFIC"
)

type UptimeCheckIP struct {
	IPAddress *string                  `json:"ipAddress"`
	Location  *string                  `json:"location"`
	Region    *UptimeCheckIPRegionEnum `json:"region"`
}
