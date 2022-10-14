package shared

type IosAppStateEnum string

const (
	IosAppStateEnumStateUnspecified IosAppStateEnum = "STATE_UNSPECIFIED"
	IosAppStateEnumActive           IosAppStateEnum = "ACTIVE"
	IosAppStateEnumDeleted          IosAppStateEnum = "DELETED"
)

type IosApp struct {
	APIKeyID    *string          `json:"apiKeyId,omitempty"`
	AppID       *string          `json:"appId,omitempty"`
	AppStoreID  *string          `json:"appStoreId,omitempty"`
	BundleID    *string          `json:"bundleId,omitempty"`
	DisplayName *string          `json:"displayName,omitempty"`
	Name        *string          `json:"name,omitempty"`
	ProjectID   *string          `json:"projectId,omitempty"`
	State       *IosAppStateEnum `json:"state,omitempty"`
	TeamID      *string          `json:"teamId,omitempty"`
}
