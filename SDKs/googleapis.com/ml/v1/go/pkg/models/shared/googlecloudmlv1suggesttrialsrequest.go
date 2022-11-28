package shared

// GoogleCloudMlV1SuggestTrialsRequest
// The request message for the SuggestTrial service method.
type GoogleCloudMlV1SuggestTrialsRequest struct {
	ClientID        *string `json:"clientId,omitempty"`
	SuggestionCount *int32  `json:"suggestionCount,omitempty"`
}
