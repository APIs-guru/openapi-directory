package shared

// GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo
// Represents a single followup intent in the chain.
type GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo struct {
	FollowupIntentName       *string `json:"followupIntentName,omitempty"`
	ParentFollowupIntentName *string `json:"parentFollowupIntentName,omitempty"`
}
