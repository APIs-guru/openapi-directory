package shared

type FirebaseAppInfoPlatformEnum string

const (
	FirebaseAppInfoPlatformEnumPlatformUnspecified FirebaseAppInfoPlatformEnum = "PLATFORM_UNSPECIFIED"
	FirebaseAppInfoPlatformEnumIos                 FirebaseAppInfoPlatformEnum = "IOS"
	FirebaseAppInfoPlatformEnumAndroid             FirebaseAppInfoPlatformEnum = "ANDROID"
	FirebaseAppInfoPlatformEnumWeb                 FirebaseAppInfoPlatformEnum = "WEB"
)

type FirebaseAppInfoStateEnum string

const (
	FirebaseAppInfoStateEnumStateUnspecified FirebaseAppInfoStateEnum = "STATE_UNSPECIFIED"
	FirebaseAppInfoStateEnumActive           FirebaseAppInfoStateEnum = "ACTIVE"
	FirebaseAppInfoStateEnumDeleted          FirebaseAppInfoStateEnum = "DELETED"
)

type FirebaseAppInfo struct {
	APIKeyID    *string                      `json:"apiKeyId"`
	AppID       *string                      `json:"appId"`
	DisplayName *string                      `json:"displayName"`
	Name        *string                      `json:"name"`
	Namespace   *string                      `json:"namespace"`
	Platform    *FirebaseAppInfoPlatformEnum `json:"platform"`
	State       *FirebaseAppInfoStateEnum    `json:"state"`
}
