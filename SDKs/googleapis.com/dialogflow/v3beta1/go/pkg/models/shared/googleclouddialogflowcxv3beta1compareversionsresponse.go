package shared

// GoogleCloudDialogflowCxV3beta1CompareVersionsResponse
// The response message for Versions.CompareVersions.
type GoogleCloudDialogflowCxV3beta1CompareVersionsResponse struct {
	BaseVersionContentJSON   *string `json:"baseVersionContentJson,omitempty"`
	CompareTime              *string `json:"compareTime,omitempty"`
	TargetVersionContentJSON *string `json:"targetVersionContentJson,omitempty"`
}
