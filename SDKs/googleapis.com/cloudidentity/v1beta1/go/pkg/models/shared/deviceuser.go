package shared

type DeviceUserCompromisedStateEnum string

const (
	DeviceUserCompromisedStateEnumCompromisedStateUnspecified DeviceUserCompromisedStateEnum = "COMPROMISED_STATE_UNSPECIFIED"
	DeviceUserCompromisedStateEnumCompromised                 DeviceUserCompromisedStateEnum = "COMPROMISED"
	DeviceUserCompromisedStateEnumNotCompromised              DeviceUserCompromisedStateEnum = "NOT_COMPROMISED"
)

type DeviceUserManagementStateEnum string

const (
	DeviceUserManagementStateEnumManagementStateUnspecified DeviceUserManagementStateEnum = "MANAGEMENT_STATE_UNSPECIFIED"
	DeviceUserManagementStateEnumWiping                     DeviceUserManagementStateEnum = "WIPING"
	DeviceUserManagementStateEnumWiped                      DeviceUserManagementStateEnum = "WIPED"
	DeviceUserManagementStateEnumApproved                   DeviceUserManagementStateEnum = "APPROVED"
	DeviceUserManagementStateEnumBlocked                    DeviceUserManagementStateEnum = "BLOCKED"
	DeviceUserManagementStateEnumPendingApproval            DeviceUserManagementStateEnum = "PENDING_APPROVAL"
	DeviceUserManagementStateEnumUnenrolled                 DeviceUserManagementStateEnum = "UNENROLLED"
)

type DeviceUserPasswordStateEnum string

const (
	DeviceUserPasswordStateEnumPasswordStateUnspecified DeviceUserPasswordStateEnum = "PASSWORD_STATE_UNSPECIFIED"
	DeviceUserPasswordStateEnumPasswordSet              DeviceUserPasswordStateEnum = "PASSWORD_SET"
	DeviceUserPasswordStateEnumPasswordNotSet           DeviceUserPasswordStateEnum = "PASSWORD_NOT_SET"
)

// DeviceUser
// Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
type DeviceUser struct {
	CompromisedState *DeviceUserCompromisedStateEnum `json:"compromisedState,omitempty"`
	CreateTime       *string                         `json:"createTime,omitempty"`
	FirstSyncTime    *string                         `json:"firstSyncTime,omitempty"`
	LanguageCode     *string                         `json:"languageCode,omitempty"`
	LastSyncTime     *string                         `json:"lastSyncTime,omitempty"`
	ManagementState  *DeviceUserManagementStateEnum  `json:"managementState,omitempty"`
	Name             *string                         `json:"name,omitempty"`
	PasswordState    *DeviceUserPasswordStateEnum    `json:"passwordState,omitempty"`
	UserAgent        *string                         `json:"userAgent,omitempty"`
	UserEmail        *string                         `json:"userEmail,omitempty"`
}
