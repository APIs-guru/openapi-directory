package shared

type InstanceBootDiskTypeEnum string

const (
	InstanceBootDiskTypeEnumDiskTypeUnspecified InstanceBootDiskTypeEnum = "DISK_TYPE_UNSPECIFIED"
	InstanceBootDiskTypeEnumPdStandard          InstanceBootDiskTypeEnum = "PD_STANDARD"
	InstanceBootDiskTypeEnumPdSsd               InstanceBootDiskTypeEnum = "PD_SSD"
	InstanceBootDiskTypeEnumPdBalanced          InstanceBootDiskTypeEnum = "PD_BALANCED"
	InstanceBootDiskTypeEnumPdExtreme           InstanceBootDiskTypeEnum = "PD_EXTREME"
)

type InstanceDataDiskTypeEnum string

const (
	InstanceDataDiskTypeEnumDiskTypeUnspecified InstanceDataDiskTypeEnum = "DISK_TYPE_UNSPECIFIED"
	InstanceDataDiskTypeEnumPdStandard          InstanceDataDiskTypeEnum = "PD_STANDARD"
	InstanceDataDiskTypeEnumPdSsd               InstanceDataDiskTypeEnum = "PD_SSD"
	InstanceDataDiskTypeEnumPdBalanced          InstanceDataDiskTypeEnum = "PD_BALANCED"
	InstanceDataDiskTypeEnumPdExtreme           InstanceDataDiskTypeEnum = "PD_EXTREME"
)

type InstanceDiskEncryptionEnum string

const (
	InstanceDiskEncryptionEnumDiskEncryptionUnspecified InstanceDiskEncryptionEnum = "DISK_ENCRYPTION_UNSPECIFIED"
	InstanceDiskEncryptionEnumGmek                      InstanceDiskEncryptionEnum = "GMEK"
	InstanceDiskEncryptionEnumCmek                      InstanceDiskEncryptionEnum = "CMEK"
)

type InstanceNicTypeEnum string

const (
	InstanceNicTypeEnumUnspecifiedNicType InstanceNicTypeEnum = "UNSPECIFIED_NIC_TYPE"
	InstanceNicTypeEnumVirtioNet          InstanceNicTypeEnum = "VIRTIO_NET"
	InstanceNicTypeEnumGvnic              InstanceNicTypeEnum = "GVNIC"
)

type InstanceStateEnum string

const (
	InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
	InstanceStateEnumStarting         InstanceStateEnum = "STARTING"
	InstanceStateEnumProvisioning     InstanceStateEnum = "PROVISIONING"
	InstanceStateEnumActive           InstanceStateEnum = "ACTIVE"
	InstanceStateEnumStopping         InstanceStateEnum = "STOPPING"
	InstanceStateEnumStopped          InstanceStateEnum = "STOPPED"
	InstanceStateEnumDeleted          InstanceStateEnum = "DELETED"
	InstanceStateEnumUpgrading        InstanceStateEnum = "UPGRADING"
	InstanceStateEnumInitializing     InstanceStateEnum = "INITIALIZING"
	InstanceStateEnumRegistering      InstanceStateEnum = "REGISTERING"
	InstanceStateEnumSuspending       InstanceStateEnum = "SUSPENDING"
	InstanceStateEnumSuspended        InstanceStateEnum = "SUSPENDED"
)

// Instance
// The definition of a notebook instance.
type Instance struct {
	AcceleratorConfig      *AcceleratorConfig          `json:"acceleratorConfig,omitempty"`
	BootDiskSizeGb         *string                     `json:"bootDiskSizeGb,omitempty"`
	BootDiskType           *InstanceBootDiskTypeEnum   `json:"bootDiskType,omitempty"`
	CanIPForward           *bool                       `json:"canIpForward,omitempty"`
	ContainerImage         *ContainerImage             `json:"containerImage,omitempty"`
	CreateTime             *string                     `json:"createTime,omitempty"`
	Creator                *string                     `json:"creator,omitempty"`
	CustomGpuDriverPath    *string                     `json:"customGpuDriverPath,omitempty"`
	DataDiskSizeGb         *string                     `json:"dataDiskSizeGb,omitempty"`
	DataDiskType           *InstanceDataDiskTypeEnum   `json:"dataDiskType,omitempty"`
	DiskEncryption         *InstanceDiskEncryptionEnum `json:"diskEncryption,omitempty"`
	Disks                  []Disk                      `json:"disks,omitempty"`
	InstallGpuDriver       *bool                       `json:"installGpuDriver,omitempty"`
	InstanceOwners         []string                    `json:"instanceOwners,omitempty"`
	KmsKey                 *string                     `json:"kmsKey,omitempty"`
	Labels                 map[string]string           `json:"labels,omitempty"`
	MachineType            *string                     `json:"machineType,omitempty"`
	Metadata               map[string]string           `json:"metadata,omitempty"`
	Name                   *string                     `json:"name,omitempty"`
	Network                *string                     `json:"network,omitempty"`
	NicType                *InstanceNicTypeEnum        `json:"nicType,omitempty"`
	NoProxyAccess          *bool                       `json:"noProxyAccess,omitempty"`
	NoPublicIP             *bool                       `json:"noPublicIp,omitempty"`
	NoRemoveDataDisk       *bool                       `json:"noRemoveDataDisk,omitempty"`
	PostStartupScript      *string                     `json:"postStartupScript,omitempty"`
	ProxyURI               *string                     `json:"proxyUri,omitempty"`
	ReservationAffinity    *ReservationAffinity        `json:"reservationAffinity,omitempty"`
	ServiceAccount         *string                     `json:"serviceAccount,omitempty"`
	ServiceAccountScopes   []string                    `json:"serviceAccountScopes,omitempty"`
	ShieldedInstanceConfig *ShieldedInstanceConfig     `json:"shieldedInstanceConfig,omitempty"`
	State                  *InstanceStateEnum          `json:"state,omitempty"`
	Subnet                 *string                     `json:"subnet,omitempty"`
	Tags                   []string                    `json:"tags,omitempty"`
	UpdateTime             *string                     `json:"updateTime,omitempty"`
	UpgradeHistory         []UpgradeHistoryEntry       `json:"upgradeHistory,omitempty"`
	VMImage                *VMImage                    `json:"vmImage,omitempty"`
}

// InstanceInput
// The definition of a notebook instance.
type InstanceInput struct {
	AcceleratorConfig      *AcceleratorConfig          `json:"acceleratorConfig,omitempty"`
	BootDiskSizeGb         *string                     `json:"bootDiskSizeGb,omitempty"`
	BootDiskType           *InstanceBootDiskTypeEnum   `json:"bootDiskType,omitempty"`
	CanIPForward           *bool                       `json:"canIpForward,omitempty"`
	ContainerImage         *ContainerImage             `json:"containerImage,omitempty"`
	CustomGpuDriverPath    *string                     `json:"customGpuDriverPath,omitempty"`
	DataDiskSizeGb         *string                     `json:"dataDiskSizeGb,omitempty"`
	DataDiskType           *InstanceDataDiskTypeEnum   `json:"dataDiskType,omitempty"`
	DiskEncryption         *InstanceDiskEncryptionEnum `json:"diskEncryption,omitempty"`
	InstallGpuDriver       *bool                       `json:"installGpuDriver,omitempty"`
	InstanceOwners         []string                    `json:"instanceOwners,omitempty"`
	KmsKey                 *string                     `json:"kmsKey,omitempty"`
	Labels                 map[string]string           `json:"labels,omitempty"`
	MachineType            *string                     `json:"machineType,omitempty"`
	Metadata               map[string]string           `json:"metadata,omitempty"`
	Network                *string                     `json:"network,omitempty"`
	NicType                *InstanceNicTypeEnum        `json:"nicType,omitempty"`
	NoProxyAccess          *bool                       `json:"noProxyAccess,omitempty"`
	NoPublicIP             *bool                       `json:"noPublicIp,omitempty"`
	NoRemoveDataDisk       *bool                       `json:"noRemoveDataDisk,omitempty"`
	PostStartupScript      *string                     `json:"postStartupScript,omitempty"`
	ReservationAffinity    *ReservationAffinity        `json:"reservationAffinity,omitempty"`
	ServiceAccount         *string                     `json:"serviceAccount,omitempty"`
	ServiceAccountScopes   []string                    `json:"serviceAccountScopes,omitempty"`
	ShieldedInstanceConfig *ShieldedInstanceConfig     `json:"shieldedInstanceConfig,omitempty"`
	Subnet                 *string                     `json:"subnet,omitempty"`
	Tags                   []string                    `json:"tags,omitempty"`
	UpgradeHistory         []UpgradeHistoryEntry       `json:"upgradeHistory,omitempty"`
	VMImage                *VMImage                    `json:"vmImage,omitempty"`
}
