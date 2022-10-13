package operations

type UpdateDeviceCameraQualityAndRetentionPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum string

const (
	UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnumStandard UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum = "Standard"
	UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnumHigh     UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum = "High"
	UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnumEnhanced UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum = "Enhanced"
)

type UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum string

const (
	UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnumOneThousandTwoHundredAndEightyx720   UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum = "1280x720"
	UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnumOneThousandNineHundredAndTwentyx1080 UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum = "1920x1080"
	UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnumOneThousandAndEightyx1080            UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum = "1080x1080"
	UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnumTwoThousandAndFiftyEightx2058        UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum = "2058x2058"
)

type UpdateDeviceCameraQualityAndRetentionRequestBody struct {
	AudioRecordingEnabled          *bool                                                           `json:"audioRecordingEnabled"`
	MotionBasedRetentionEnabled    *bool                                                           `json:"motionBasedRetentionEnabled"`
	MotionDetectorVersion          *int64                                                          `json:"motionDetectorVersion"`
	ProfileID                      *string                                                         `json:"profileId"`
	Quality                        *UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum    `json:"quality"`
	Resolution                     *UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum `json:"resolution"`
	RestrictedBandwidthModeEnabled *bool                                                           `json:"restrictedBandwidthModeEnabled"`
}

type UpdateDeviceCameraQualityAndRetentionRequest struct {
	PathParams UpdateDeviceCameraQualityAndRetentionPathParams
	Request    *UpdateDeviceCameraQualityAndRetentionRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceCameraQualityAndRetentionResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	UpdateDeviceCameraQualityAndRetention200ApplicationJSONObject map[string]interface{}
}
