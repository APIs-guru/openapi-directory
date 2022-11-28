package shared

type IosAppStateEnum string

const (
	IosAppStateEnumStateUnspecified IosAppStateEnum = "STATE_UNSPECIFIED"
	IosAppStateEnumActive           IosAppStateEnum = "ACTIVE"
	IosAppStateEnumDeleted          IosAppStateEnum = "DELETED"
)

// IosAppInput
// Details of a Firebase App for iOS.
type IosAppInput struct {
	APIKeyID    *string `json:"apiKeyId,omitempty"`
	AppStoreID  *string `json:"appStoreId,omitempty"`
	BundleID    *string `json:"bundleId,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	TeamID      *string `json:"teamId,omitempty"`
}

// IosApp
// Details of a Firebase App for iOS.
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
