package shared

type WritableDeviceTypeInput struct {
	Comments          *string                `json:"comments,omitempty"`
	CustomFields      map[string]interface{} `json:"custom_fields,omitempty"`
	InterfaceOrdering *int64                 `json:"interface_ordering,omitempty"`
	IsConsoleServer   *bool                  `json:"is_console_server,omitempty"`
	IsFullDepth       *bool                  `json:"is_full_depth,omitempty"`
	IsNetworkDevice   *bool                  `json:"is_network_device,omitempty"`
	IsPdu             *bool                  `json:"is_pdu,omitempty"`
	Manufacturer      int64                  `json:"manufacturer"`
	Model             string                 `json:"model"`
	PartNumber        *string                `json:"part_number,omitempty"`
	Slug              string                 `json:"slug"`
	SubdeviceRole     *bool                  `json:"subdevice_role,omitempty"`
	Tags              []string               `json:"tags,omitempty"`
	UHeight           *int64                 `json:"u_height,omitempty"`
}
