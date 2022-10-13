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

type Instance struct {
	AcceleratorConfig      *AcceleratorConfig          `json:"acceleratorConfig"`
	BootDiskSizeGb         *string                     `json:"bootDiskSizeGb"`
	BootDiskType           *InstanceBootDiskTypeEnum   `json:"bootDiskType"`
	CanIPForward           *bool                       `json:"canIpForward"`
	ContainerImage         *ContainerImage             `json:"containerImage"`
	CreateTime             *string                     `json:"createTime"`
	Creator                *string                     `json:"creator"`
	CustomGpuDriverPath    *string                     `json:"customGpuDriverPath"`
	DataDiskSizeGb         *string                     `json:"dataDiskSizeGb"`
	DataDiskType           *InstanceDataDiskTypeEnum   `json:"dataDiskType"`
	DiskEncryption         *InstanceDiskEncryptionEnum `json:"diskEncryption"`
	Disks                  []Disk                      `json:"disks"`
	InstallGpuDriver       *bool                       `json:"installGpuDriver"`
	InstanceOwners         []string                    `json:"instanceOwners"`
	KmsKey                 *string                     `json:"kmsKey"`
	Labels                 map[string]string           `json:"labels"`
	MachineType            *string                     `json:"machineType"`
	Metadata               map[string]string           `json:"metadata"`
	Name                   *string                     `json:"name"`
	Network                *string                     `json:"network"`
	NicType                *InstanceNicTypeEnum        `json:"nicType"`
	NoProxyAccess          *bool                       `json:"noProxyAccess"`
	NoPublicIP             *bool                       `json:"noPublicIp"`
	NoRemoveDataDisk       *bool                       `json:"noRemoveDataDisk"`
	PostStartupScript      *string                     `json:"postStartupScript"`
	ProxyURI               *string                     `json:"proxyUri"`
	ReservationAffinity    *ReservationAffinity        `json:"reservationAffinity"`
	ServiceAccount         *string                     `json:"serviceAccount"`
	ServiceAccountScopes   []string                    `json:"serviceAccountScopes"`
	ShieldedInstanceConfig *ShieldedInstanceConfig     `json:"shieldedInstanceConfig"`
	State                  *InstanceStateEnum          `json:"state"`
	Subnet                 *string                     `json:"subnet"`
	Tags                   []string                    `json:"tags"`
	UpdateTime             *string                     `json:"updateTime"`
	UpgradeHistory         []UpgradeHistoryEntry       `json:"upgradeHistory"`
	VMImage                *VMImage                    `json:"vmImage"`
}
