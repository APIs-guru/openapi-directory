package shared

type AccountAccessPermissionEnum string

const (
	AccountAccessPermissionEnumAccountPermissionUnspecified AccountAccessPermissionEnum = "accountPermissionUnspecified"
	AccountAccessPermissionEnumNoAccess                     AccountAccessPermissionEnum = "noAccess"
	AccountAccessPermissionEnumUser                         AccountAccessPermissionEnum = "user"
	AccountAccessPermissionEnumAdmin                        AccountAccessPermissionEnum = "admin"
)

type AccountAccess struct {
	Permission *AccountAccessPermissionEnum `json:"permission"`
}
