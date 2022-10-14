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
	AudioRecordingEnabled          *bool                                                           `json:"audioRecordingEnabled,omitempty"`
	MotionBasedRetentionEnabled    *bool                                                           `json:"motionBasedRetentionEnabled,omitempty"`
	MotionDetectorVersion          *int64                                                          `json:"motionDetectorVersion,omitempty"`
	ProfileID                      *string                                                         `json:"profileId,omitempty"`
	Quality                        *UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum    `json:"quality,omitempty"`
	Resolution                     *UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum `json:"resolution,omitempty"`
	RestrictedBandwidthModeEnabled *bool                                                           `json:"restrictedBandwidthModeEnabled,omitempty"`
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
