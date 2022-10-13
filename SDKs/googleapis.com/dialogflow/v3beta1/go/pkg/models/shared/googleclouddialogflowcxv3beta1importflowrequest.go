package shared

type GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum string

const (
	GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnumImportOptionUnspecified GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum = "IMPORT_OPTION_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnumKeep                    GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum = "KEEP"
	GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnumFallback                GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum = "FALLBACK"
)

type GoogleCloudDialogflowCxV3beta1ImportFlowRequest struct {
	FlowContent  *string                                                          `json:"flowContent"`
	FlowURI      *string                                                          `json:"flowUri"`
	ImportOption *GoogleCloudDialogflowCxV3beta1ImportFlowRequestImportOptionEnum `json:"importOption"`
}
