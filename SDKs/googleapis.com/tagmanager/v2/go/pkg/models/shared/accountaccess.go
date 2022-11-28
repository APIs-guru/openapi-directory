package shared

type AccountAccessPermissionEnum string

const (
	AccountAccessPermissionEnumAccountPermissionUnspecified AccountAccessPermissionEnum = "accountPermissionUnspecified"
	AccountAccessPermissionEnumNoAccess                     AccountAccessPermissionEnum = "noAccess"
	AccountAccessPermissionEnumUser                         AccountAccessPermissionEnum = "user"
	AccountAccessPermissionEnumAdmin                        AccountAccessPermissionEnum = "admin"
)

// AccountAccess
// Defines the Google Tag Manager Account access permissions.
type AccountAccess struct {
	Permission *AccountAccessPermissionEnum `json:"permission,omitempty"`
}
