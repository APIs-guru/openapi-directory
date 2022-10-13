package shared

type GoogleMapsUnityClientInfoPlatformEnum string

const (
	GoogleMapsUnityClientInfoPlatformEnumPlatformUnspecified GoogleMapsUnityClientInfoPlatformEnum = "PLATFORM_UNSPECIFIED"
	GoogleMapsUnityClientInfoPlatformEnumEditor              GoogleMapsUnityClientInfoPlatformEnum = "EDITOR"
	GoogleMapsUnityClientInfoPlatformEnumMacOs               GoogleMapsUnityClientInfoPlatformEnum = "MAC_OS"
	GoogleMapsUnityClientInfoPlatformEnumWindows             GoogleMapsUnityClientInfoPlatformEnum = "WINDOWS"
	GoogleMapsUnityClientInfoPlatformEnumLinux               GoogleMapsUnityClientInfoPlatformEnum = "LINUX"
	GoogleMapsUnityClientInfoPlatformEnumAndroid             GoogleMapsUnityClientInfoPlatformEnum = "ANDROID"
	GoogleMapsUnityClientInfoPlatformEnumIos                 GoogleMapsUnityClientInfoPlatformEnum = "IOS"
	GoogleMapsUnityClientInfoPlatformEnumWebGl               GoogleMapsUnityClientInfoPlatformEnum = "WEB_GL"
)

type GoogleMapsUnityClientInfo struct {
	APIClient            *string                                `json:"apiClient"`
	ApplicationID        *string                                `json:"applicationId"`
	ApplicationVersion   *string                                `json:"applicationVersion"`
	DeviceModel          *string                                `json:"deviceModel"`
	LanguageCode         *string                                `json:"languageCode"`
	OperatingSystem      *string                                `json:"operatingSystem"`
	OperatingSystemBuild *string                                `json:"operatingSystemBuild"`
	Platform             *GoogleMapsUnityClientInfoPlatformEnum `json:"platform"`
}
