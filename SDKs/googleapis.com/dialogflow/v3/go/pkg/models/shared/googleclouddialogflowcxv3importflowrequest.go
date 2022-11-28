package shared

type GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum string

const (
	GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnumImportOptionUnspecified GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum = "IMPORT_OPTION_UNSPECIFIED"
	GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnumKeep                    GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum = "KEEP"
	GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnumFallback                GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum = "FALLBACK"
)

// GoogleCloudDialogflowCxV3ImportFlowRequest
// The request message for Flows.ImportFlow.
type GoogleCloudDialogflowCxV3ImportFlowRequest struct {
	FlowContent  *string                                                     `json:"flowContent,omitempty"`
	FlowURI      *string                                                     `json:"flowUri,omitempty"`
	ImportOption *GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum `json:"importOption,omitempty"`
}
