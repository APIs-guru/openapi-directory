package shared




type FirebaseAppInfoPlatformEnum string

const (
    FirebaseAppInfoPlatformEnumPlatformUnspecified FirebaseAppInfoPlatformEnum = "PLATFORM_UNSPECIFIED"
FirebaseAppInfoPlatformEnumIos FirebaseAppInfoPlatformEnum = "IOS"
FirebaseAppInfoPlatformEnumAndroid FirebaseAppInfoPlatformEnum = "ANDROID"
FirebaseAppInfoPlatformEnumWeb FirebaseAppInfoPlatformEnum = "WEB"
)



type FirebaseAppInfoStateEnum string

const (
    FirebaseAppInfoStateEnumStateUnspecified FirebaseAppInfoStateEnum = "STATE_UNSPECIFIED"
FirebaseAppInfoStateEnumActive FirebaseAppInfoStateEnum = "ACTIVE"
FirebaseAppInfoStateEnumDeleted FirebaseAppInfoStateEnum = "DELETED"
)


type FirebaseAppInfo struct {
    APIKeyID *string `json:"apiKeyId,omitempty"`
    AppID *string `json:"appId,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    Namespace *string `json:"namespace,omitempty"`
    Platform *FirebaseAppInfoPlatformEnum `json:"platform,omitempty"`
    State *FirebaseAppInfoStateEnum `json:"state,omitempty"`
    
}

