package shared

type AccountAccessPermissionEnum string

const (
	AccountAccessPermissionEnumRead          AccountAccessPermissionEnum = "read"
	AccountAccessPermissionEnumEdit          AccountAccessPermissionEnum = "edit"
	AccountAccessPermissionEnumPublish       AccountAccessPermissionEnum = "publish"
	AccountAccessPermissionEnumDelete        AccountAccessPermissionEnum = "delete"
	AccountAccessPermissionEnumManage        AccountAccessPermissionEnum = "manage"
	AccountAccessPermissionEnumEditWorkspace AccountAccessPermissionEnum = "editWorkspace"
)

// AccountAccess
// Defines the Google Tag Manager Account access permissions.
type AccountAccess struct {
	Permission []AccountAccessPermissionEnum `json:"permission,omitempty"`
}
