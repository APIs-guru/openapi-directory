package shared

type IosAppStateEnum string

const (
	IosAppStateEnumStateUnspecified IosAppStateEnum = "STATE_UNSPECIFIED"
	IosAppStateEnumActive           IosAppStateEnum = "ACTIVE"
	IosAppStateEnumDeleted          IosAppStateEnum = "DELETED"
)

type IosApp struct {
	APIKeyID    *string          `json:"apiKeyId"`
	AppID       *string          `json:"appId"`
	AppStoreID  *string          `json:"appStoreId"`
	BundleID    *string          `json:"bundleId"`
	DisplayName *string          `json:"displayName"`
	Name        *string          `json:"name"`
	ProjectID   *string          `json:"projectId"`
	State       *IosAppStateEnum `json:"state"`
	TeamID      *string          `json:"teamId"`
}
