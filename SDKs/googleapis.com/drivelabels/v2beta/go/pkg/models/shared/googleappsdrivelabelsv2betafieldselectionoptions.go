package shared

// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput
// Options for the selection field type.
type GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput struct {
	Choices     []GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput `json:"choices,omitempty"`
	ListOptions *GoogleAppsDriveLabelsV2betaFieldListOptions                  `json:"listOptions,omitempty"`
}

// GoogleAppsDriveLabelsV2betaFieldSelectionOptions
// Options for the selection field type.
type GoogleAppsDriveLabelsV2betaFieldSelectionOptions struct {
	Choices     []GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice `json:"choices,omitempty"`
	ListOptions *GoogleAppsDriveLabelsV2betaFieldListOptions             `json:"listOptions,omitempty"`
}
