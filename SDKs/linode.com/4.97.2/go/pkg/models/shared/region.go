package shared

type RegionResolvers struct {
	Ipv4 *string `json:"ipv4"`
	Ipv6 *string `json:"ipv6"`
}

type RegionStatusEnum string

const (
	RegionStatusEnumOk     RegionStatusEnum = "ok"
	RegionStatusEnumOutage RegionStatusEnum = "outage"
)

type Region struct {
	Capabilities []string          `json:"capabilities"`
	Country      *string           `json:"country"`
	ID           *string           `json:"id"`
	Resolvers    *RegionResolvers  `json:"resolvers"`
	Status       *RegionStatusEnum `json:"status"`
}
