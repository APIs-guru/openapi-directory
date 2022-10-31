package shared



type WritableInterface struct {
    CircuitTermination int64 `json:"circuit_termination"`
    Description *string `json:"description,omitempty"`
    Device int64 `json:"device"`
    Enabled *bool `json:"enabled,omitempty"`
    FormFactor *int64 `json:"form_factor,omitempty"`
    ID *int64 `json:"id,omitempty"`
    InterfaceConnection *string `json:"interface_connection,omitempty"`
    IsConnected *string `json:"is_connected,omitempty"`
    Lag *int64 `json:"lag,omitempty"`
    MacAddress *string `json:"mac_address,omitempty"`
    MgmtOnly *bool `json:"mgmt_only,omitempty"`
    Mode *int64 `json:"mode,omitempty"`
    Mtu *int64 `json:"mtu,omitempty"`
    Name string `json:"name"`
    TaggedVlans []int64 `json:"tagged_vlans,omitempty"`
    Tags []string `json:"tags,omitempty"`
    UntaggedVlan *int64 `json:"untagged_vlan,omitempty"`
    
}

