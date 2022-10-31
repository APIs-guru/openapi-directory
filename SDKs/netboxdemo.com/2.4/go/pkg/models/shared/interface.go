package shared

type InterfaceFormFactor struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type InterfaceMode struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type Interface struct {
	CircuitTermination  *InterfaceCircuitTermination `json:"circuit_termination,omitempty"`
	Description         *string                      `json:"description,omitempty"`
	Device              NestedDevice                 `json:"device"`
	Enabled             *bool                        `json:"enabled,omitempty"`
	FormFactor          *InterfaceFormFactor         `json:"form_factor,omitempty"`
	ID                  *int64                       `json:"id,omitempty"`
	InterfaceConnection *string                      `json:"interface_connection,omitempty"`
	IsConnected         *string                      `json:"is_connected,omitempty"`
	Lag                 *NestedInterface             `json:"lag,omitempty"`
	MacAddress          *string                      `json:"mac_address,omitempty"`
	MgmtOnly            *bool                        `json:"mgmt_only,omitempty"`
	Mode                *InterfaceMode               `json:"mode,omitempty"`
	Mtu                 *int64                       `json:"mtu,omitempty"`
	Name                string                       `json:"name"`
	TaggedVlans         []InterfaceVlan              `json:"tagged_vlans,omitempty"`
	Tags                []string                     `json:"tags,omitempty"`
	UntaggedVlan        *InterfaceVlan               `json:"untagged_vlan,omitempty"`
}
