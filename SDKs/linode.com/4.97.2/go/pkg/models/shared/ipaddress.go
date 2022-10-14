package shared

type IPAddressTypeEnum string

const (
	IPAddressTypeEnumIpv4      IPAddressTypeEnum = "ipv4"
	IPAddressTypeEnumIpv6      IPAddressTypeEnum = "ipv6"
	IPAddressTypeEnumIpv6Pool  IPAddressTypeEnum = "ipv6/pool"
	IPAddressTypeEnumIpv6Range IPAddressTypeEnum = "ipv6/range"
)

type IPAddress struct {
	Address    *string            `json:"address,omitempty"`
	Gateway    *string            `json:"gateway,omitempty"`
	LinodeID   *int64             `json:"linode_id,omitempty"`
	Prefix     *int64             `json:"prefix,omitempty"`
	Public     *bool              `json:"public,omitempty"`
	Rdns       *string            `json:"rdns,omitempty"`
	Region     *string            `json:"region,omitempty"`
	SubnetMask *string            `json:"subnet_mask,omitempty"`
	Type       *IPAddressTypeEnum `json:"type,omitempty"`
}
