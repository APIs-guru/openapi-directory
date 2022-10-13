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
	Description    *string                          `json:"description"`
	Enabled        *bool                            `json:"enabled"`
	ID             *int64                           `json:"id"`
	MacAddress     *string                          `json:"mac_address"`
	Mode           *VirtualMachineInterfaceModeMode `json:"mode"`
	Mtu            *int64                           `json:"mtu"`
	Name           string                           `json:"name"`
	TaggedVlans    []NestedVlan                     `json:"tagged_vlans"`
	Tags           []string                         `json:"tags"`
	Type           *VirtualMachineInterfaceTypeType `json:"type"`
	UntaggedVlan   *NestedVlan                      `json:"untagged_vlan"`
	VirtualMachine NestedVirtualMachine             `json:"virtual_machine"`
}
