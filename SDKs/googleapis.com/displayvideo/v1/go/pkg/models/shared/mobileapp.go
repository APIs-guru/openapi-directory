package shared

type MobileAppPlatformEnum string

const (
	MobileAppPlatformEnumPlatformUnspecified MobileAppPlatformEnum = "PLATFORM_UNSPECIFIED"
	MobileAppPlatformEnumIos                 MobileAppPlatformEnum = "IOS"
	MobileAppPlatformEnumAndroid             MobileAppPlatformEnum = "ANDROID"
)

type MobileApp struct {
	AppID       *string                `json:"appId"`
	DisplayName *string                `json:"displayName"`
	Platform    *MobileAppPlatformEnum `json:"platform"`
	Publisher   *string                `json:"publisher"`
}
