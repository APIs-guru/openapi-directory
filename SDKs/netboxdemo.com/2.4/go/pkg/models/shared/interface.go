package shared

type InterfaceFormFactorFormFactor struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type InterfaceModeMode struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type Interface struct {
	CircuitTermination  *InterfaceCircuitTermination   `json:"circuit_termination"`
	Description         *string                        `json:"description"`
	Device              NestedDevice                   `json:"device"`
	Enabled             *bool                          `json:"enabled"`
	FormFactor          *InterfaceFormFactorFormFactor `json:"form_factor"`
	ID                  *int64                         `json:"id"`
	InterfaceConnection *string                        `json:"interface_connection"`
	IsConnected         *string                        `json:"is_connected"`
	Lag                 *NestedInterface               `json:"lag"`
	MacAddress          *string                        `json:"mac_address"`
	MgmtOnly            *bool                          `json:"mgmt_only"`
	Mode                *InterfaceModeMode             `json:"mode"`
	Mtu                 *int64                         `json:"mtu"`
	Name                string                         `json:"name"`
	TaggedVlans         []InterfaceVlan                `json:"tagged_vlans"`
	Tags                []string                       `json:"tags"`
	UntaggedVlan        *InterfaceVlan                 `json:"untagged_vlan"`
}
