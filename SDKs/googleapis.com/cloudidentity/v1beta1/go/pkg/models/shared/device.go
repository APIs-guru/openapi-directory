package shared

type DeviceCompromisedStateEnum string

const (
	DeviceCompromisedStateEnumCompromisedStateUnspecified DeviceCompromisedStateEnum = "COMPROMISED_STATE_UNSPECIFIED"
	DeviceCompromisedStateEnumCompromised                 DeviceCompromisedStateEnum = "COMPROMISED"
	DeviceCompromisedStateEnumUncompromised               DeviceCompromisedStateEnum = "UNCOMPROMISED"
)

type DeviceDeviceTypeEnum string

const (
	DeviceDeviceTypeEnumDeviceTypeUnspecified DeviceDeviceTypeEnum = "DEVICE_TYPE_UNSPECIFIED"
	DeviceDeviceTypeEnumAndroid               DeviceDeviceTypeEnum = "ANDROID"
	DeviceDeviceTypeEnumIos                   DeviceDeviceTypeEnum = "IOS"
	DeviceDeviceTypeEnumGoogleSync            DeviceDeviceTypeEnum = "GOOGLE_SYNC"
	DeviceDeviceTypeEnumWindows               DeviceDeviceTypeEnum = "WINDOWS"
	DeviceDeviceTypeEnumMacOs                 DeviceDeviceTypeEnum = "MAC_OS"
	DeviceDeviceTypeEnumLinux                 DeviceDeviceTypeEnum = "LINUX"
	DeviceDeviceTypeEnumChromeOs              DeviceDeviceTypeEnum = "CHROME_OS"
)

type DeviceEncryptionStateEnum string

const (
	DeviceEncryptionStateEnumEncryptionStateUnspecified DeviceEncryptionStateEnum = "ENCRYPTION_STATE_UNSPECIFIED"
	DeviceEncryptionStateEnumUnsupportedByDevice        DeviceEncryptionStateEnum = "UNSUPPORTED_BY_DEVICE"
	DeviceEncryptionStateEnumEncrypted                  DeviceEncryptionStateEnum = "ENCRYPTED"
	DeviceEncryptionStateEnumNotEncrypted               DeviceEncryptionStateEnum = "NOT_ENCRYPTED"
)

type DeviceManagementStateEnum string

const (
	DeviceManagementStateEnumManagementStateUnspecified DeviceManagementStateEnum = "MANAGEMENT_STATE_UNSPECIFIED"
	DeviceManagementStateEnumApproved                   DeviceManagementStateEnum = "APPROVED"
	DeviceManagementStateEnumBlocked                    DeviceManagementStateEnum = "BLOCKED"
	DeviceManagementStateEnumPending                    DeviceManagementStateEnum = "PENDING"
	DeviceManagementStateEnumUnprovisioned              DeviceManagementStateEnum = "UNPROVISIONED"
	DeviceManagementStateEnumWiping                     DeviceManagementStateEnum = "WIPING"
	DeviceManagementStateEnumWiped                      DeviceManagementStateEnum = "WIPED"
)

type DeviceOwnerTypeEnum string

const (
	DeviceOwnerTypeEnumDeviceOwnershipUnspecified DeviceOwnerTypeEnum = "DEVICE_OWNERSHIP_UNSPECIFIED"
	DeviceOwnerTypeEnumCompany                    DeviceOwnerTypeEnum = "COMPANY"
	DeviceOwnerTypeEnumByod                       DeviceOwnerTypeEnum = "BYOD"
)

type Device struct {
	AndroidSpecificAttributes              *AndroidAttributes                      `json:"androidSpecificAttributes"`
	AssetTag                               *string                                 `json:"assetTag"`
	BasebandVersion                        *string                                 `json:"basebandVersion"`
	BootloaderVersion                      *string                                 `json:"bootloaderVersion"`
	Brand                                  *string                                 `json:"brand"`
	BuildNumber                            *string                                 `json:"buildNumber"`
	CompromisedState                       *DeviceCompromisedStateEnum             `json:"compromisedState"`
	CreateTime                             *string                                 `json:"createTime"`
	DeviceID                               *string                                 `json:"deviceId"`
	DeviceType                             *DeviceDeviceTypeEnum                   `json:"deviceType"`
	EnabledDeveloperOptions                *bool                                   `json:"enabledDeveloperOptions"`
	EnabledUsbDebugging                    *bool                                   `json:"enabledUsbDebugging"`
	EncryptionState                        *DeviceEncryptionStateEnum              `json:"encryptionState"`
	EndpointVerificationSpecificAttributes *EndpointVerificationSpecificAttributes `json:"endpointVerificationSpecificAttributes"`
	Imei                                   *string                                 `json:"imei"`
	KernelVersion                          *string                                 `json:"kernelVersion"`
	LastSyncTime                           *string                                 `json:"lastSyncTime"`
	ManagementState                        *DeviceManagementStateEnum              `json:"managementState"`
	Manufacturer                           *string                                 `json:"manufacturer"`
	Meid                                   *string                                 `json:"meid"`
	Model                                  *string                                 `json:"model"`
	Name                                   *string                                 `json:"name"`
	NetworkOperator                        *string                                 `json:"networkOperator"`
	OsVersion                              *string                                 `json:"osVersion"`
	OtherAccounts                          []string                                `json:"otherAccounts"`
	OwnerType                              *DeviceOwnerTypeEnum                    `json:"ownerType"`
	ReleaseVersion                         *string                                 `json:"releaseVersion"`
	SecurityPatchTime                      *string                                 `json:"securityPatchTime"`
	SerialNumber                           *string                                 `json:"serialNumber"`
	WifiMacAddresses                       []string                                `json:"wifiMacAddresses"`
}
