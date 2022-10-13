package operations

type UpdateNetworkCameraQualityRetentionProfilePathParams struct {
	NetworkID                 string `pathParam:"style=simple,explode=false,name=networkId"`
	QualityRetentionProfileID string `pathParam:"style=simple,explode=false,name=qualityRetentionProfileId"`
}

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum string

const (
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumStandard UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = "Standard"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumEnhanced UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = "Enhanced"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumHigh     UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = "High"
)

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum string

const (
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandTwoHundredAndEightyx720   UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = "1280x720"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandNineHundredAndTwentyx1080 UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = "1920x1080"
)

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 struct {
	Quality    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum    `json:"quality"`
	Resolution UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum `json:"resolution"`
}

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum string

const (
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnumStandard UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = "Standard"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnumEnhanced UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = "Enhanced"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnumHigh     UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = "High"
)

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum string

const (
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnumOneThousandTwoHundredAndEightyx720   UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = "1280x720"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnumOneThousandNineHundredAndTwentyx1080 UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = "1920x1080"
)

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We struct {
	Quality    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum    `json:"quality"`
	Resolution UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum `json:"resolution"`
}

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum string

const (
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumStandard UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = "Standard"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumEnhanced UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = "Enhanced"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumHigh     UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = "High"
)

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum string

const (
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnumOneThousandTwoHundredAndEightyx720 UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = "1280x720"
)

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 struct {
	Quality    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum    `json:"quality"`
	Resolution UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum `json:"resolution"`
}

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum string

const (
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumStandard UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = "Standard"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumEnhanced UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = "Enhanced"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumHigh     UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = "High"
)

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum string

const (
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumOneThousandTwoHundredAndEightyx720       UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = "1280x720"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumOneThousandNineHundredAndTwentyx1080     UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = "1920x1080"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumTwoThousandSixHundredAndEightyEightx1512 UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = "2688x1512"
)

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X struct {
	Quality    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum    `json:"quality"`
	Resolution UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum `json:"resolution"`
}

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum string

const (
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumStandard UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = "Standard"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumEnhanced UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = "Enhanced"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumHigh     UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = "High"
)

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum string

const (
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumOneThousandAndEightyx1080     UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = "1080x1080"
	UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumTwoThousandAndFiftyEightx2058 UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = "2058x2058"
)

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 struct {
	Quality    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum    `json:"quality"`
	Resolution UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum `json:"resolution"`
}

type UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings struct {
	Mv12Mv22Mv72 *UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 `json:"MV12/MV22/MV72"`
	Mv12We       *UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We       `json:"MV12WE"`
	Mv21Mv71     *UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71     `json:"MV21/MV71"`
	Mv22XMv72X   *UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X   `json:"MV22X/MV72X"`
	Mv32         *UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32         `json:"MV32"`
}

type UpdateNetworkCameraQualityRetentionProfileRequestBody struct {
	AudioRecordingEnabled          *bool                                                               `json:"audioRecordingEnabled"`
	CloudArchiveEnabled            *bool                                                               `json:"cloudArchiveEnabled"`
	MaxRetentionDays               *int64                                                              `json:"maxRetentionDays"`
	MotionBasedRetentionEnabled    *bool                                                               `json:"motionBasedRetentionEnabled"`
	MotionDetectorVersion          *int64                                                              `json:"motionDetectorVersion"`
	Name                           *string                                                             `json:"name"`
	RestrictedBandwidthModeEnabled *bool                                                               `json:"restrictedBandwidthModeEnabled"`
	ScheduleID                     *string                                                             `json:"scheduleId"`
	VideoSettings                  *UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings `json:"videoSettings"`
}

type UpdateNetworkCameraQualityRetentionProfileRequest struct {
	PathParams UpdateNetworkCameraQualityRetentionProfilePathParams
	Request    *UpdateNetworkCameraQualityRetentionProfileRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkCameraQualityRetentionProfileResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	UpdateNetworkCameraQualityRetentionProfile200ApplicationJSONObject map[string]interface{}
}
