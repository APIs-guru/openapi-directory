package shared

type WritableInterface struct {
	CircuitTermination  int64    `json:"circuit_termination"`
	Description         *string  `json:"description"`
	Device              int64    `json:"device"`
	Enabled             *bool    `json:"enabled"`
	FormFactor          *int64   `json:"form_factor"`
	ID                  *int64   `json:"id"`
	InterfaceConnection *string  `json:"interface_connection"`
	IsConnected         *string  `json:"is_connected"`
	Lag                 *int64   `json:"lag"`
	MacAddress          *string  `json:"mac_address"`
	MgmtOnly            *bool    `json:"mgmt_only"`
	Mode                *int64   `json:"mode"`
	Mtu                 *int64   `json:"mtu"`
	Name                string   `json:"name"`
	TaggedVlans         []int64  `json:"tagged_vlans"`
	Tags                []string `json:"tags"`
	UntaggedVlan        *int64   `json:"untagged_vlan"`
}
