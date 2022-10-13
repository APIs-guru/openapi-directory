package shared

type VirtualMachineConfigNicTypeEnum string

const (
	VirtualMachineConfigNicTypeEnumUnspecifiedNicType VirtualMachineConfigNicTypeEnum = "UNSPECIFIED_NIC_TYPE"
	VirtualMachineConfigNicTypeEnumVirtioNet          VirtualMachineConfigNicTypeEnum = "VIRTIO_NET"
	VirtualMachineConfigNicTypeEnumGvnic              VirtualMachineConfigNicTypeEnum = "GVNIC"
)

type VirtualMachineConfig struct {
	AcceleratorConfig      *RuntimeAcceleratorConfig        `json:"acceleratorConfig"`
	BootImage              map[string]interface{}           `json:"bootImage"`
	ContainerImages        []ContainerImage                 `json:"containerImages"`
	DataDisk               *LocalDisk                       `json:"dataDisk"`
	EncryptionConfig       *EncryptionConfig                `json:"encryptionConfig"`
	GuestAttributes        map[string]string                `json:"guestAttributes"`
	InternalIPOnly         *bool                            `json:"internalIpOnly"`
	Labels                 map[string]string                `json:"labels"`
	MachineType            *string                          `json:"machineType"`
	Metadata               map[string]string                `json:"metadata"`
	Network                *string                          `json:"network"`
	NicType                *VirtualMachineConfigNicTypeEnum `json:"nicType"`
	ReservedIPRange        *string                          `json:"reservedIpRange"`
	ShieldedInstanceConfig *RuntimeShieldedInstanceConfig   `json:"shieldedInstanceConfig"`
	Subnet                 *string                          `json:"subnet"`
	Tags                   []string                         `json:"tags"`
	Zone                   *string                          `json:"zone"`
}
