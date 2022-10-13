package shared

import (
	"time"
)

type DeviceTypeInterfaceOrderingInterfaceOrdering struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type DeviceTypeSubdeviceRoleSubdeviceRole struct {
	Label string `json:"label"`
	Value bool   `json:"value"`
}

type DeviceType struct {
	Comments          *string                                       `json:"comments"`
	Created           *time.Time                                    `json:"created"`
	CustomFields      map[string]interface{}                        `json:"custom_fields"`
	ID                *int64                                        `json:"id"`
	InstanceCount     *int64                                        `json:"instance_count"`
	InterfaceOrdering *DeviceTypeInterfaceOrderingInterfaceOrdering `json:"interface_ordering"`
	IsConsoleServer   *bool                                         `json:"is_console_server"`
	IsFullDepth       *bool                                         `json:"is_full_depth"`
	IsNetworkDevice   *bool                                         `json:"is_network_device"`
	IsPdu             *bool                                         `json:"is_pdu"`
	LastUpdated       *time.Time                                    `json:"last_updated"`
	Manufacturer      NestedManufacturer                            `json:"manufacturer"`
	Model             string                                        `json:"model"`
	PartNumber        *string                                       `json:"part_number"`
	Slug              string                                        `json:"slug"`
	SubdeviceRole     *DeviceTypeSubdeviceRoleSubdeviceRole         `json:"subdevice_role"`
	Tags              []string                                      `json:"tags"`
	UHeight           *int64                                        `json:"u_height"`
}
