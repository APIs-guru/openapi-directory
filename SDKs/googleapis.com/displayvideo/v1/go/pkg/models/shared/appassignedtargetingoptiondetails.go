package shared

type AppAssignedTargetingOptionDetailsAppPlatformEnum string

const (
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformUnspecified  AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_UNSPECIFIED"
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformIos          AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_IOS"
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroid      AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_ANDROID"
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformRoku         AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_ROKU"
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAmazonFiretv AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_AMAZON_FIRETV"
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformPlaystation  AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_PLAYSTATION"
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAppleTv      AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_APPLE_TV"
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformXbox         AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_XBOX"
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformSamsungTv    AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_SAMSUNG_TV"
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv    AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_ANDROID_TV"
	AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformGenericCtv   AppAssignedTargetingOptionDetailsAppPlatformEnum = "APP_PLATFORM_GENERIC_CTV"
)

// AppAssignedTargetingOptionDetails
// Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
type AppAssignedTargetingOptionDetails struct {
	AppID       *string                                           `json:"appId,omitempty"`
	AppPlatform *AppAssignedTargetingOptionDetailsAppPlatformEnum `json:"appPlatform,omitempty"`
	DisplayName *string                                           `json:"displayName,omitempty"`
	Negative    *bool                                             `json:"negative,omitempty"`
}

// AppAssignedTargetingOptionDetailsInput
// Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
type AppAssignedTargetingOptionDetailsInput struct {
	AppID       *string                                           `json:"appId,omitempty"`
	AppPlatform *AppAssignedTargetingOptionDetailsAppPlatformEnum `json:"appPlatform,omitempty"`
	Negative    *bool                                             `json:"negative,omitempty"`
}
