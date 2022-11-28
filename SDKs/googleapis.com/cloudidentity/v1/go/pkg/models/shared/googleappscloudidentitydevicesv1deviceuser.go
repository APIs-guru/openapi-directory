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

// GoogleAppsCloudidentityDevicesV1DeviceUser
// Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
type GoogleAppsCloudidentityDevicesV1DeviceUser struct {
	CompromisedState *GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum `json:"compromisedState,omitempty"`
	CreateTime       *string                                                         `json:"createTime,omitempty"`
	FirstSyncTime    *string                                                         `json:"firstSyncTime,omitempty"`
	LanguageCode     *string                                                         `json:"languageCode,omitempty"`
	LastSyncTime     *string                                                         `json:"lastSyncTime,omitempty"`
	ManagementState  *GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum  `json:"managementState,omitempty"`
	Name             *string                                                         `json:"name,omitempty"`
	PasswordState    *GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum    `json:"passwordState,omitempty"`
	UserAgent        *string                                                         `json:"userAgent,omitempty"`
	UserEmail        *string                                                         `json:"userEmail,omitempty"`
}
