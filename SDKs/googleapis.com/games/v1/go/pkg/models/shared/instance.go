package shared




type InstancePlatformTypeEnum string

const (
    InstancePlatformTypeEnumPlatformTypeUnspecified InstancePlatformTypeEnum = "PLATFORM_TYPE_UNSPECIFIED"
InstancePlatformTypeEnumAndroid InstancePlatformTypeEnum = "ANDROID"
InstancePlatformTypeEnumIos InstancePlatformTypeEnum = "IOS"
InstancePlatformTypeEnumWebApp InstancePlatformTypeEnum = "WEB_APP"
)


type Instance struct {
    AcquisitionURI *string `json:"acquisitionUri,omitempty"`
    AndroidInstance *InstanceAndroidDetails `json:"androidInstance,omitempty"`
    IosInstance *InstanceIosDetails `json:"iosInstance,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    PlatformType *InstancePlatformTypeEnum `json:"platformType,omitempty"`
    RealtimePlay *bool `json:"realtimePlay,omitempty"`
    TurnBasedPlay *bool `json:"turnBasedPlay,omitempty"`
    WebInstance *InstanceWebDetails `json:"webInstance,omitempty"`
    
}

