package shared

// GoogleAppsDriveLabelsV2betaWriteControl
// Provides control over how write requests are executed. When not specified, the last write wins.
type GoogleAppsDriveLabelsV2betaWriteControl struct {
	RequiredRevisionID *string `json:"requiredRevisionId,omitempty"`
}
