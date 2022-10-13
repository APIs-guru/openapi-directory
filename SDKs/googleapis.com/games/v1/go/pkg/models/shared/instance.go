package shared

type InstancePlatformTypeEnum string

const (
	InstancePlatformTypeEnumPlatformTypeUnspecified InstancePlatformTypeEnum = "PLATFORM_TYPE_UNSPECIFIED"
	InstancePlatformTypeEnumAndroid                 InstancePlatformTypeEnum = "ANDROID"
	InstancePlatformTypeEnumIos                     InstancePlatformTypeEnum = "IOS"
	InstancePlatformTypeEnumWebApp                  InstancePlatformTypeEnum = "WEB_APP"
)

type Instance struct {
	AcquisitionURI  *string                   `json:"acquisitionUri"`
	AndroidInstance *InstanceAndroidDetails   `json:"androidInstance"`
	IosInstance     *InstanceIosDetails       `json:"iosInstance"`
	Kind            *string                   `json:"kind"`
	Name            *string                   `json:"name"`
	PlatformType    *InstancePlatformTypeEnum `json:"platformType"`
	RealtimePlay    *bool                     `json:"realtimePlay"`
	TurnBasedPlay   *bool                     `json:"turnBasedPlay"`
	WebInstance     *InstanceWebDetails       `json:"webInstance"`
}
