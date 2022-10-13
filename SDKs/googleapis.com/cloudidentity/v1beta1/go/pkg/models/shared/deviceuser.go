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

type DeviceUser struct {
	CompromisedState *DeviceUserCompromisedStateEnum `json:"compromisedState"`
	CreateTime       *string                         `json:"createTime"`
	FirstSyncTime    *string                         `json:"firstSyncTime"`
	LanguageCode     *string                         `json:"languageCode"`
	LastSyncTime     *string                         `json:"lastSyncTime"`
	ManagementState  *DeviceUserManagementStateEnum  `json:"managementState"`
	Name             *string                         `json:"name"`
	PasswordState    *DeviceUserPasswordStateEnum    `json:"passwordState"`
	UserAgent        *string                         `json:"userAgent"`
	UserEmail        *string                         `json:"userEmail"`
}
