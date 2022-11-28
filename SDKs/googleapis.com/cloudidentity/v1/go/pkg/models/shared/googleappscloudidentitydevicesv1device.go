package shared

type GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum string

const (
	GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnumCompromisedStateUnspecified GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum = "COMPROMISED_STATE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnumCompromised                 GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum = "COMPROMISED"
	GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnumUncompromised               GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum = "UNCOMPROMISED"
)

type GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum string

const (
	GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnumDeviceTypeUnspecified GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum = "DEVICE_TYPE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnumAndroid               GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum = "ANDROID"
	GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnumIos                   GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum = "IOS"
	GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnumGoogleSync            GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum = "GOOGLE_SYNC"
	GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnumWindows               GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum = "WINDOWS"
	GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnumMacOs                 GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum = "MAC_OS"
	GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnumLinux                 GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum = "LINUX"
	GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnumChromeOs              GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum = "CHROME_OS"
)

type GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum string

const (
	GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnumEncryptionStateUnspecified GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum = "ENCRYPTION_STATE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnumUnsupportedByDevice        GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum = "UNSUPPORTED_BY_DEVICE"
	GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnumEncrypted                  GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum = "ENCRYPTED"
	GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnumNotEncrypted               GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum = "NOT_ENCRYPTED"
)

type GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum string

const (
	GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnumManagementStateUnspecified GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum = "MANAGEMENT_STATE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnumApproved                   GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum = "APPROVED"
	GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnumBlocked                    GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum = "BLOCKED"
	GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnumPending                    GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum = "PENDING"
	GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnumUnprovisioned              GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum = "UNPROVISIONED"
	GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnumWiping                     GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum = "WIPING"
	GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnumWiped                      GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum = "WIPED"
)

type GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum string

const (
	GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnumDeviceOwnershipUnspecified GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum = "DEVICE_OWNERSHIP_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnumCompany                    GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum = "COMPANY"
	GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnumByod                       GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum = "BYOD"
)

// GoogleAppsCloudidentityDevicesV1DeviceInput
//
//	A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
type GoogleAppsCloudidentityDevicesV1DeviceInput struct {
	AndroidSpecificAttributes *GoogleAppsCloudidentityDevicesV1AndroidAttributes `json:"androidSpecificAttributes,omitempty"`
	AssetTag                  *string                                            `json:"assetTag,omitempty"`
	DeviceID                  *string                                            `json:"deviceId,omitempty"`
	LastSyncTime              *string                                            `json:"lastSyncTime,omitempty"`
	SerialNumber              *string                                            `json:"serialNumber,omitempty"`
	WifiMacAddresses          []string                                           `json:"wifiMacAddresses,omitempty"`
}

// GoogleAppsCloudidentityDevicesV1Device
//
//	A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
type GoogleAppsCloudidentityDevicesV1Device struct {
	AndroidSpecificAttributes *GoogleAppsCloudidentityDevicesV1AndroidAttributes          `json:"androidSpecificAttributes,omitempty"`
	AssetTag                  *string                                                     `json:"assetTag,omitempty"`
	BasebandVersion           *string                                                     `json:"basebandVersion,omitempty"`
	BootloaderVersion         *string                                                     `json:"bootloaderVersion,omitempty"`
	Brand                     *string                                                     `json:"brand,omitempty"`
	BuildNumber               *string                                                     `json:"buildNumber,omitempty"`
	CompromisedState          *GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum `json:"compromisedState,omitempty"`
	CreateTime                *string                                                     `json:"createTime,omitempty"`
	DeviceID                  *string                                                     `json:"deviceId,omitempty"`
	DeviceType                *GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum       `json:"deviceType,omitempty"`
	EnabledDeveloperOptions   *bool                                                       `json:"enabledDeveloperOptions,omitempty"`
	EnabledUsbDebugging       *bool                                                       `json:"enabledUsbDebugging,omitempty"`
	EncryptionState           *GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum  `json:"encryptionState,omitempty"`
	Imei                      *string                                                     `json:"imei,omitempty"`
	KernelVersion             *string                                                     `json:"kernelVersion,omitempty"`
	LastSyncTime              *string                                                     `json:"lastSyncTime,omitempty"`
	ManagementState           *GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum  `json:"managementState,omitempty"`
	Manufacturer              *string                                                     `json:"manufacturer,omitempty"`
	Meid                      *string                                                     `json:"meid,omitempty"`
	Model                     *string                                                     `json:"model,omitempty"`
	Name                      *string                                                     `json:"name,omitempty"`
	NetworkOperator           *string                                                     `json:"networkOperator,omitempty"`
	OsVersion                 *string                                                     `json:"osVersion,omitempty"`
	OtherAccounts             []string                                                    `json:"otherAccounts,omitempty"`
	OwnerType                 *GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum        `json:"ownerType,omitempty"`
	ReleaseVersion            *string                                                     `json:"releaseVersion,omitempty"`
	SecurityPatchTime         *string                                                     `json:"securityPatchTime,omitempty"`
	SerialNumber              *string                                                     `json:"serialNumber,omitempty"`
	WifiMacAddresses          []string                                                    `json:"wifiMacAddresses,omitempty"`
}
