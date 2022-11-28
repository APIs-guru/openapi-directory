package shared

type MobileAppPlatformEnum string

const (
	MobileAppPlatformEnumPlatformUnspecified MobileAppPlatformEnum = "PLATFORM_UNSPECIFIED"
	MobileAppPlatformEnumIos                 MobileAppPlatformEnum = "IOS"
	MobileAppPlatformEnumAndroid             MobileAppPlatformEnum = "ANDROID"
)

// MobileAppInput
// A mobile app promoted by a mobile app install line item.
type MobileAppInput struct {
	AppID *string `json:"appId,omitempty"`
}

// MobileApp
// A mobile app promoted by a mobile app install line item.
type MobileApp struct {
	AppID       *string                `json:"appId,omitempty"`
	DisplayName *string                `json:"displayName,omitempty"`
	Platform    *MobileAppPlatformEnum `json:"platform,omitempty"`
	Publisher   *string                `json:"publisher,omitempty"`
}
