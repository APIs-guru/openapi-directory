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

type GoogleAppsCloudidentityDevicesV1Device struct {
	AndroidSpecificAttributes *GoogleAppsCloudidentityDevicesV1AndroidAttributes          `json:"androidSpecificAttributes"`
	AssetTag                  *string                                                     `json:"assetTag"`
	BasebandVersion           *string                                                     `json:"basebandVersion"`
	BootloaderVersion         *string                                                     `json:"bootloaderVersion"`
	Brand                     *string                                                     `json:"brand"`
	BuildNumber               *string                                                     `json:"buildNumber"`
	CompromisedState          *GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum `json:"compromisedState"`
	CreateTime                *string                                                     `json:"createTime"`
	DeviceID                  *string                                                     `json:"deviceId"`
	DeviceType                *GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum       `json:"deviceType"`
	EnabledDeveloperOptions   *bool                                                       `json:"enabledDeveloperOptions"`
	EnabledUsbDebugging       *bool                                                       `json:"enabledUsbDebugging"`
	EncryptionState           *GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum  `json:"encryptionState"`
	Imei                      *string                                                     `json:"imei"`
	KernelVersion             *string                                                     `json:"kernelVersion"`
	LastSyncTime              *string                                                     `json:"lastSyncTime"`
	ManagementState           *GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum  `json:"managementState"`
	Manufacturer              *string                                                     `json:"manufacturer"`
	Meid                      *string                                                     `json:"meid"`
	Model                     *string                                                     `json:"model"`
	Name                      *string                                                     `json:"name"`
	NetworkOperator           *string                                                     `json:"networkOperator"`
	OsVersion                 *string                                                     `json:"osVersion"`
	OtherAccounts             []string                                                    `json:"otherAccounts"`
	OwnerType                 *GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum        `json:"ownerType"`
	ReleaseVersion            *string                                                     `json:"releaseVersion"`
	SecurityPatchTime         *string                                                     `json:"securityPatchTime"`
	SerialNumber              *string                                                     `json:"serialNumber"`
	WifiMacAddresses          []string                                                    `json:"wifiMacAddresses"`
}
