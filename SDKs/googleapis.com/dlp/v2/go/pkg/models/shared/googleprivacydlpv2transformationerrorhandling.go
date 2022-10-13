package shared

type GooglePrivacyDlpV2TransformationErrorHandling struct {
	LeaveUntransformed map[string]interface{} `json:"leaveUntransformed"`
	ThrowError         map[string]interface{} `json:"throwError"`
}
