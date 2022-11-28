package shared

// GoogleCloudDialogflowCxV3CompareVersionsResponse
// The response message for Versions.CompareVersions.
type GoogleCloudDialogflowCxV3CompareVersionsResponse struct {
	BaseVersionContentJSON   *string `json:"baseVersionContentJson,omitempty"`
	CompareTime              *string `json:"compareTime,omitempty"`
	TargetVersionContentJSON *string `json:"targetVersionContentJson,omitempty"`
}
