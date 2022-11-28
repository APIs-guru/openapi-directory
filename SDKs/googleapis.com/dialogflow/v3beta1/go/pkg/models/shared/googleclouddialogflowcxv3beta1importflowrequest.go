package shared

type GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum string

const (
	GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnumImportOptionUnspecified GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum = "IMPORT_OPTION_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnumKeep                    GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum = "KEEP"
	GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnumFallback                GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum = "FALLBACK"
)

// GoogleCloudDialogflowCxV3beta1ImportFlowRequest
// The request message for Flows.ImportFlow.
type GoogleCloudDialogflowCxV3beta1ImportFlowRequest struct {
	FlowContent  *string                                                          `json:"flowContent,omitempty"`
	FlowURI      *string                                                          `json:"flowUri,omitempty"`
	ImportOption *GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum `json:"importOption,omitempty"`
}
