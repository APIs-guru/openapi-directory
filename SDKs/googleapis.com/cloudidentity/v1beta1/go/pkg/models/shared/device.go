package shared

type DeviceClientTypesEnum string

const (
	DeviceClientTypesEnumClientTypeUnspecified               DeviceClientTypesEnum = "CLIENT_TYPE_UNSPECIFIED"
	DeviceClientTypesEnumDriveFs                             DeviceClientTypesEnum = "DRIVE_FS"
	DeviceClientTypesEnumFundamental                         DeviceClientTypesEnum = "FUNDAMENTAL"
	DeviceClientTypesEnumEndpointVerification                DeviceClientTypesEnum = "ENDPOINT_VERIFICATION"
	DeviceClientTypesEnumWindowsAdvanced                     DeviceClientTypesEnum = "WINDOWS_ADVANCED"
	DeviceClientTypesEnumGoogleCredentialsProviderForWindows DeviceClientTypesEnum = "GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS"
)

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

// Device
// A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
type Device struct {
	AndroidSpecificAttributes              *AndroidAttributes                      `json:"androidSpecificAttributes,omitempty"`
	AssetTag                               *string                                 `json:"assetTag,omitempty"`
	BasebandVersion                        *string                                 `json:"basebandVersion,omitempty"`
	BootloaderVersion                      *string                                 `json:"bootloaderVersion,omitempty"`
	Brand                                  *string                                 `json:"brand,omitempty"`
	BuildNumber                            *string                                 `json:"buildNumber,omitempty"`
	ClientTypes                            []DeviceClientTypesEnum                 `json:"clientTypes,omitempty"`
	CompromisedState                       *DeviceCompromisedStateEnum             `json:"compromisedState,omitempty"`
	CreateTime                             *string                                 `json:"createTime,omitempty"`
	DeviceID                               *string                                 `json:"deviceId,omitempty"`
	DeviceType                             *DeviceDeviceTypeEnum                   `json:"deviceType,omitempty"`
	EnabledDeveloperOptions                *bool                                   `json:"enabledDeveloperOptions,omitempty"`
	EnabledUsbDebugging                    *bool                                   `json:"enabledUsbDebugging,omitempty"`
	EncryptionState                        *DeviceEncryptionStateEnum              `json:"encryptionState,omitempty"`
	EndpointVerificationSpecificAttributes *EndpointVerificationSpecificAttributes `json:"endpointVerificationSpecificAttributes,omitempty"`
	Hostname                               *string                                 `json:"hostname,omitempty"`
	Imei                                   *string                                 `json:"imei,omitempty"`
	KernelVersion                          *string                                 `json:"kernelVersion,omitempty"`
	LastSyncTime                           *string                                 `json:"lastSyncTime,omitempty"`
	ManagementState                        *DeviceManagementStateEnum              `json:"managementState,omitempty"`
	Manufacturer                           *string                                 `json:"manufacturer,omitempty"`
	Meid                                   *string                                 `json:"meid,omitempty"`
	Model                                  *string                                 `json:"model,omitempty"`
	Name                                   *string                                 `json:"name,omitempty"`
	NetworkOperator                        *string                                 `json:"networkOperator,omitempty"`
	OsVersion                              *string                                 `json:"osVersion,omitempty"`
	OtherAccounts                          []string                                `json:"otherAccounts,omitempty"`
	OwnerType                              *DeviceOwnerTypeEnum                    `json:"ownerType,omitempty"`
	ReleaseVersion                         *string                                 `json:"releaseVersion,omitempty"`
	SecurityPatchTime                      *string                                 `json:"securityPatchTime,omitempty"`
	SerialNumber                           *string                                 `json:"serialNumber,omitempty"`
	WifiMacAddresses                       []string                                `json:"wifiMacAddresses,omitempty"`
}

// DeviceInput
// A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
type DeviceInput struct {
	AndroidSpecificAttributes              *AndroidAttributes                      `json:"androidSpecificAttributes,omitempty"`
	AssetTag                               *string                                 `json:"assetTag,omitempty"`
	ClientTypes                            []DeviceClientTypesEnum                 `json:"clientTypes,omitempty"`
	DeviceID                               *string                                 `json:"deviceId,omitempty"`
	EndpointVerificationSpecificAttributes *EndpointVerificationSpecificAttributes `json:"endpointVerificationSpecificAttributes,omitempty"`
	Hostname                               *string                                 `json:"hostname,omitempty"`
	LastSyncTime                           *string                                 `json:"lastSyncTime,omitempty"`
	SerialNumber                           *string                                 `json:"serialNumber,omitempty"`
	WifiMacAddresses                       []string                                `json:"wifiMacAddresses,omitempty"`
}
