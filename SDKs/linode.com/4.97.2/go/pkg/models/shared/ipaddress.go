package shared

type IPAddressTypeEnum string

const (
	IPAddressTypeEnumIpv4      IPAddressTypeEnum = "ipv4"
	IPAddressTypeEnumIpv6      IPAddressTypeEnum = "ipv6"
	IPAddressTypeEnumIpv6Pool  IPAddressTypeEnum = "ipv6/pool"
	IPAddressTypeEnumIpv6Range IPAddressTypeEnum = "ipv6/range"
)

type IPAddress struct {
	Address    *string            `json:"address"`
	Gateway    *string            `json:"gateway"`
	LinodeID   *int64             `json:"linode_id"`
	Prefix     *int64             `json:"prefix"`
	Public     *bool              `json:"public"`
	Rdns       *string            `json:"rdns"`
	Region     *string            `json:"region"`
	SubnetMask *string            `json:"subnet_mask"`
	Type       *IPAddressTypeEnum `json:"type"`
}
