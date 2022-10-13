package shared

type AccountSettingsObjectStorageEnum string

const (
	AccountSettingsObjectStorageEnumDisabled  AccountSettingsObjectStorageEnum = "disabled"
	AccountSettingsObjectStorageEnumSuspended AccountSettingsObjectStorageEnum = "suspended"
	AccountSettingsObjectStorageEnumActive    AccountSettingsObjectStorageEnum = "active"
)

type AccountSettings struct {
	BackupsEnabled       *bool                             `json:"backups_enabled"`
	LongviewSubscription *string                           `json:"longview_subscription"`
	Managed              *bool                             `json:"managed"`
	NetworkHelper        *bool                             `json:"network_helper"`
	ObjectStorage        *AccountSettingsObjectStorageEnum `json:"object_storage"`
}
