package shared

type GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum string

const (
	GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnumCompromisedStateUnspecified GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum = "COMPROMISED_STATE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnumCompromised                 GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum = "COMPROMISED"
	GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnumNotCompromised              GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum = "NOT_COMPROMISED"
)

type GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum string

const (
	GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnumManagementStateUnspecified GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum = "MANAGEMENT_STATE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnumWiping                     GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum = "WIPING"
	GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnumWiped                      GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum = "WIPED"
	GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnumApproved                   GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum = "APPROVED"
	GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnumBlocked                    GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum = "BLOCKED"
	GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnumPendingApproval            GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum = "PENDING_APPROVAL"
	GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnumUnenrolled                 GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum = "UNENROLLED"
)

type GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum string

const (
	GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnumPasswordStateUnspecified GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum = "PASSWORD_STATE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnumPasswordSet              GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum = "PASSWORD_SET"
	GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnumPasswordNotSet           GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum = "PASSWORD_NOT_SET"
)

type GoogleAppsCloudidentityDevicesV1DeviceUser struct {
	CompromisedState *GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum `json:"compromisedState"`
	CreateTime       *string                                                         `json:"createTime"`
	FirstSyncTime    *string                                                         `json:"firstSyncTime"`
	LanguageCode     *string                                                         `json:"languageCode"`
	LastSyncTime     *string                                                         `json:"lastSyncTime"`
	ManagementState  *GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum  `json:"managementState"`
	Name             *string                                                         `json:"name"`
	PasswordState    *GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum    `json:"passwordState"`
	UserAgent        *string                                                         `json:"userAgent"`
	UserEmail        *string                                                         `json:"userEmail"`
}
