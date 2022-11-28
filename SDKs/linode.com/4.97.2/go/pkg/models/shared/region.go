package shared

type RegionResolvers struct {
	Ipv4 *string `json:"ipv4,omitempty"`
	Ipv6 *string `json:"ipv6,omitempty"`
}

type RegionStatusEnum string

const (
	RegionStatusEnumOk     RegionStatusEnum = "ok"
	RegionStatusEnumOutage RegionStatusEnum = "outage"
)

// Region
// An area where Linode services are available.
type Region struct {
	Capabilities []string          `json:"capabilities,omitempty"`
	Country      *string           `json:"country,omitempty"`
	ID           *string           `json:"id,omitempty"`
	Resolvers    *RegionResolvers  `json:"resolvers,omitempty"`
	Status       *RegionStatusEnum `json:"status,omitempty"`
}
