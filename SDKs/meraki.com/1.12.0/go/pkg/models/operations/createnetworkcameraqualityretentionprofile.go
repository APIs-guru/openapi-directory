package operations

type CreateNetworkCameraQualityRetentionProfilePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum string

const (
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumStandard CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = "Standard"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumEnhanced CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = "Enhanced"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumHigh     CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = "High"
)

type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum string

const (
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandTwoHundredAndEightyx720   CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = "1280x720"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandNineHundredAndTwentyx1080 CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = "1920x1080"
)

// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72
// Quality and resolution for MV12/MV22/MV72 camera models.
type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 struct {
	Quality    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum    `json:"quality"`
	Resolution CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum `json:"resolution"`
}

type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum string

const (
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnumStandard CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = "Standard"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnumEnhanced CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = "Enhanced"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnumHigh     CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = "High"
)

type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum string

const (
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnumOneThousandTwoHundredAndEightyx720   CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = "1280x720"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnumOneThousandNineHundredAndTwentyx1080 CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = "1920x1080"
)

// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
// Quality and resolution for MV12WE camera models.
type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We struct {
	Quality    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum    `json:"quality"`
	Resolution CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum `json:"resolution"`
}

type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum string

const (
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumStandard CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = "Standard"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumEnhanced CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = "Enhanced"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumHigh     CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = "High"
)

type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum string

const (
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnumOneThousandTwoHundredAndEightyx720 CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = "1280x720"
)

// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
// Quality and resolution for MV21/MV71 camera models.
type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 struct {
	Quality    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum    `json:"quality"`
	Resolution CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum `json:"resolution"`
}

type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum string

const (
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumStandard CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = "Standard"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumEnhanced CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = "Enhanced"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumHigh     CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = "High"
)

type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum string

const (
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumOneThousandTwoHundredAndEightyx720       CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = "1280x720"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumOneThousandNineHundredAndTwentyx1080     CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = "1920x1080"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumTwoThousandSixHundredAndEightyEightx1512 CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = "2688x1512"
)

// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
// Quality and resolution for MV22X/MV72X camera models.
type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X struct {
	Quality    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum    `json:"quality"`
	Resolution CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum `json:"resolution"`
}

type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum string

const (
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumStandard CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = "Standard"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumEnhanced CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = "Enhanced"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumHigh     CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = "High"
)

type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum string

const (
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumOneThousandAndEightyx1080     CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = "1080x1080"
	CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumTwoThousandAndFiftyEightx2058 CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = "2058x2058"
)

// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
// Quality and resolution for MV32 camera models.
type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 struct {
	Quality    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum    `json:"quality"`
	Resolution CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum `json:"resolution"`
}

// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
// Video quality and resolution settings for all the camera models.
type CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings struct {
	Mv12Mv22Mv72 *CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 `json:"MV12/MV22/MV72,omitempty"`
	Mv12We       *CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We       `json:"MV12WE,omitempty"`
	Mv21Mv71     *CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71     `json:"MV21/MV71,omitempty"`
	Mv22XMv72X   *CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X   `json:"MV22X/MV72X,omitempty"`
	Mv32         *CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32         `json:"MV32,omitempty"`
}

type CreateNetworkCameraQualityRetentionProfileRequestBody struct {
	AudioRecordingEnabled          *bool                                                               `json:"audioRecordingEnabled,omitempty"`
	CloudArchiveEnabled            *bool                                                               `json:"cloudArchiveEnabled,omitempty"`
	MaxRetentionDays               *int64                                                              `json:"maxRetentionDays,omitempty"`
	MotionBasedRetentionEnabled    *bool                                                               `json:"motionBasedRetentionEnabled,omitempty"`
	MotionDetectorVersion          *int64                                                              `json:"motionDetectorVersion,omitempty"`
	Name                           string                                                              `json:"name"`
	RestrictedBandwidthModeEnabled *bool                                                               `json:"restrictedBandwidthModeEnabled,omitempty"`
	ScheduleID                     *string                                                             `json:"scheduleId,omitempty"`
	VideoSettings                  *CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings `json:"videoSettings,omitempty"`
}

type CreateNetworkCameraQualityRetentionProfileRequest struct {
	PathParams CreateNetworkCameraQualityRetentionProfilePathParams
	Request    CreateNetworkCameraQualityRetentionProfileRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkCameraQualityRetentionProfileResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	CreateNetworkCameraQualityRetentionProfile200ApplicationJSONObject map[string]interface{}
}
