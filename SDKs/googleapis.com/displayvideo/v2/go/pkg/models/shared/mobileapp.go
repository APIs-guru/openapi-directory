package shared

type MobileAppPlatformEnum string

const (
	MobileAppPlatformEnumPlatformUnspecified MobileAppPlatformEnum = "PLATFORM_UNSPECIFIED"
	MobileAppPlatformEnumIos                 MobileAppPlatformEnum = "IOS"
	MobileAppPlatformEnumAndroid             MobileAppPlatformEnum = "ANDROID"
)

type MobileApp struct {
	AppID       *string                `json:"appId,omitempty"`
	DisplayName *string                `json:"displayName,omitempty"`
	Platform    *MobileAppPlatformEnum `json:"platform,omitempty"`
	Publisher   *string                `json:"publisher,omitempty"`
}
