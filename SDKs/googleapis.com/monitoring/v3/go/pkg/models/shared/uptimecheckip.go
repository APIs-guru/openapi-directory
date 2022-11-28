package shared

type UptimeCheckIPRegionEnum string

const (
	UptimeCheckIPRegionEnumRegionUnspecified UptimeCheckIPRegionEnum = "REGION_UNSPECIFIED"
	UptimeCheckIPRegionEnumUsa               UptimeCheckIPRegionEnum = "USA"
	UptimeCheckIPRegionEnumEurope            UptimeCheckIPRegionEnum = "EUROPE"
	UptimeCheckIPRegionEnumSouthAmerica      UptimeCheckIPRegionEnum = "SOUTH_AMERICA"
	UptimeCheckIPRegionEnumAsiaPacific       UptimeCheckIPRegionEnum = "ASIA_PACIFIC"
)

// UptimeCheckIP
// Contains the region, location, and list of IP addresses where checkers in the location run from.
type UptimeCheckIP struct {
	IPAddress *string                  `json:"ipAddress,omitempty"`
	Location  *string                  `json:"location,omitempty"`
	Region    *UptimeCheckIPRegionEnum `json:"region,omitempty"`
}
