package shared

// GoogleCloudDialogflowV2IntentFollowupIntentInfo
// Represents a single followup intent in the chain.
type GoogleCloudDialogflowV2IntentFollowupIntentInfo struct {
	FollowupIntentName       *string `json:"followupIntentName,omitempty"`
	ParentFollowupIntentName *string `json:"parentFollowupIntentName,omitempty"`
}
