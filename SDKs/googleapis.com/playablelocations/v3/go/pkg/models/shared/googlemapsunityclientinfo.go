package shared




type GoogleMapsUnityClientInfoPlatformEnum string

const (
    GoogleMapsUnityClientInfoPlatformEnumPlatformUnspecified GoogleMapsUnityClientInfoPlatformEnum = "PLATFORM_UNSPECIFIED"
GoogleMapsUnityClientInfoPlatformEnumEditor GoogleMapsUnityClientInfoPlatformEnum = "EDITOR"
GoogleMapsUnityClientInfoPlatformEnumMacOs GoogleMapsUnityClientInfoPlatformEnum = "MAC_OS"
GoogleMapsUnityClientInfoPlatformEnumWindows GoogleMapsUnityClientInfoPlatformEnum = "WINDOWS"
GoogleMapsUnityClientInfoPlatformEnumLinux GoogleMapsUnityClientInfoPlatformEnum = "LINUX"
GoogleMapsUnityClientInfoPlatformEnumAndroid GoogleMapsUnityClientInfoPlatformEnum = "ANDROID"
GoogleMapsUnityClientInfoPlatformEnumIos GoogleMapsUnityClientInfoPlatformEnum = "IOS"
GoogleMapsUnityClientInfoPlatformEnumWebGl GoogleMapsUnityClientInfoPlatformEnum = "WEB_GL"
)


type GoogleMapsUnityClientInfo struct {
    APIClient *string `json:"apiClient,omitempty"`
    ApplicationID *string `json:"applicationId,omitempty"`
    ApplicationVersion *string `json:"applicationVersion,omitempty"`
    DeviceModel *string `json:"deviceModel,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    OperatingSystem *string `json:"operatingSystem,omitempty"`
    OperatingSystemBuild *string `json:"operatingSystemBuild,omitempty"`
    Platform *GoogleMapsUnityClientInfoPlatformEnum `json:"platform,omitempty"`
    
}

