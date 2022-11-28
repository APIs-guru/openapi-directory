package shared

type GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum string

const (
	GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnumRestoreOptionUnspecified GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum = "RESTORE_OPTION_UNSPECIFIED"
	GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnumKeep                     GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum = "KEEP"
	GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnumFallback                 GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum = "FALLBACK"
)

// GoogleCloudDialogflowCxV3RestoreAgentRequest
// The request message for Agents.RestoreAgent.
type GoogleCloudDialogflowCxV3RestoreAgentRequest struct {
	AgentContent  *string                                                        `json:"agentContent,omitempty"`
	AgentURI      *string                                                        `json:"agentUri,omitempty"`
	RestoreOption *GoogleCloudDialogflowCxV3RestoreAgentRequestRestoreOptionEnum `json:"restoreOption,omitempty"`
}
