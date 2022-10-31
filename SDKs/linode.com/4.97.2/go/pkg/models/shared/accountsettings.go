package shared

type AccountSettingsObjectStorageEnum string

const (
	AccountSettingsObjectStorageEnumDisabled  AccountSettingsObjectStorageEnum = "disabled"
	AccountSettingsObjectStorageEnumSuspended AccountSettingsObjectStorageEnum = "suspended"
	AccountSettingsObjectStorageEnumActive    AccountSettingsObjectStorageEnum = "active"
)

type AccountSettings struct {
	BackupsEnabled       *bool                             `json:"backups_enabled,omitempty"`
	LongviewSubscription *string                           `json:"longview_subscription,omitempty"`
	Managed              *bool                             `json:"managed,omitempty"`
	NetworkHelper        *bool                             `json:"network_helper,omitempty"`
	ObjectStorage        *AccountSettingsObjectStorageEnum `json:"object_storage,omitempty"`
}
