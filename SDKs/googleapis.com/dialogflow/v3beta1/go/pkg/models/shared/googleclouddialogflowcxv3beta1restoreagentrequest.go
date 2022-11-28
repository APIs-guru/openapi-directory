package shared

type GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnum string

const (
	GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnumRestoreOptionUnspecified GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnum = "RESTORE_OPTION_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnumKeep                     GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnum = "KEEP"
	GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnumFallback                 GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnum = "FALLBACK"
)

// GoogleCloudDialogflowCxV3beta1RestoreAgentRequest
// The request message for Agents.RestoreAgent.
type GoogleCloudDialogflowCxV3beta1RestoreAgentRequest struct {
	AgentContent  *string                                                             `json:"agentContent,omitempty"`
	AgentURI      *string                                                             `json:"agentUri,omitempty"`
	RestoreOption *GoogleCloudDialogflowCxV3beta1RestoreAgentRequestRestoreOptionEnum `json:"restoreOption,omitempty"`
}
