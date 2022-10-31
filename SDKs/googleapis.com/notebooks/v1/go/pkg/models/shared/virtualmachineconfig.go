package shared




type VirtualMachineConfigNicTypeEnum string

const (
    VirtualMachineConfigNicTypeEnumUnspecifiedNicType VirtualMachineConfigNicTypeEnum = "UNSPECIFIED_NIC_TYPE"
VirtualMachineConfigNicTypeEnumVirtioNet VirtualMachineConfigNicTypeEnum = "VIRTIO_NET"
VirtualMachineConfigNicTypeEnumGvnic VirtualMachineConfigNicTypeEnum = "GVNIC"
)


type VirtualMachineConfig struct {
    AcceleratorConfig *RuntimeAcceleratorConfig `json:"acceleratorConfig,omitempty"`
    BootImage map[string]interface{} `json:"bootImage,omitempty"`
    ContainerImages []ContainerImage `json:"containerImages,omitempty"`
    DataDisk *LocalDisk `json:"dataDisk,omitempty"`
    EncryptionConfig *EncryptionConfig `json:"encryptionConfig,omitempty"`
    GuestAttributes map[string]string `json:"guestAttributes,omitempty"`
    InternalIPOnly *bool `json:"internalIpOnly,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    MachineType *string `json:"machineType,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    Network *string `json:"network,omitempty"`
    NicType *VirtualMachineConfigNicTypeEnum `json:"nicType,omitempty"`
    ReservedIPRange *string `json:"reservedIpRange,omitempty"`
    ShieldedInstanceConfig *RuntimeShieldedInstanceConfig `json:"shieldedInstanceConfig,omitempty"`
    Subnet *string `json:"subnet,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

