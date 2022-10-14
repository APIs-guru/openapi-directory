package shared

type VirtualMachineInterfaceModeLabelEnum string

const (
	VirtualMachineInterfaceModeLabelEnumAccess    VirtualMachineInterfaceModeLabelEnum = "Access"
	VirtualMachineInterfaceModeLabelEnumTagged    VirtualMachineInterfaceModeLabelEnum = "Tagged"
	VirtualMachineInterfaceModeLabelEnumTaggedAll VirtualMachineInterfaceModeLabelEnum = "Tagged (All)"
)

type VirtualMachineInterfaceModeValueEnum string

const (
	VirtualMachineInterfaceModeValueEnumAccess    VirtualMachineInterfaceModeValueEnum = "access"
	VirtualMachineInterfaceModeValueEnumTagged    VirtualMachineInterfaceModeValueEnum = "tagged"
	VirtualMachineInterfaceModeValueEnumTaggedAll VirtualMachineInterfaceModeValueEnum = "tagged-all"
)

type VirtualMachineInterfaceModeMode struct {
	Label VirtualMachineInterfaceModeLabelEnum `json:"label"`
	Value VirtualMachineInterfaceModeValueEnum `json:"value"`
}

type VirtualMachineInterfaceTypeLabelEnum string

const (
	VirtualMachineInterfaceTypeLabelEnumVirtual VirtualMachineInterfaceTypeLabelEnum = "Virtual"
)

type VirtualMachineInterfaceTypeValueEnum string

const (
	VirtualMachineInterfaceTypeValueEnumVirtual VirtualMachineInterfaceTypeValueEnum = "virtual"
)

type VirtualMachineInterfaceTypeType struct {
	Label VirtualMachineInterfaceTypeLabelEnum `json:"label"`
	Value VirtualMachineInterfaceTypeValueEnum `json:"value"`
}

type VirtualMachineInterface struct {
	Description    *string                          `json:"description,omitempty"`
	Enabled        *bool                            `json:"enabled,omitempty"`
	ID             *int64                           `json:"id,omitempty"`
	MacAddress     *string                          `json:"mac_address,omitempty"`
	Mode           *VirtualMachineInterfaceModeMode `json:"mode,omitempty"`
	Mtu            *int64                           `json:"mtu,omitempty"`
	Name           string                           `json:"name"`
	TaggedVlans    []NestedVlan                     `json:"tagged_vlans,omitempty"`
	Tags           []string                         `json:"tags,omitempty"`
	Type           *VirtualMachineInterfaceTypeType `json:"type,omitempty"`
	UntaggedVlan   *NestedVlan                      `json:"untagged_vlan,omitempty"`
	VirtualMachine NestedVirtualMachine             `json:"virtual_machine"`
}
