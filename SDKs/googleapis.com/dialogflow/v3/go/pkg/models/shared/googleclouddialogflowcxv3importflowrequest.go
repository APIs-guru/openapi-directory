package shared

type GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum string

const (
	GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnumImportOptionUnspecified GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum = "IMPORT_OPTION_UNSPECIFIED"
	GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnumKeep                    GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum = "KEEP"
	GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnumFallback                GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum = "FALLBACK"
)

type GoogleCloudDialogflowCxV3ImportFlowRequest struct {
	FlowContent  *string                                                     `json:"flowContent"`
	FlowURI      *string                                                     `json:"flowUri"`
	ImportOption *GoogleCloudDialogflowCxV3ImportFlowRequestImportOptionEnum `json:"importOption"`
}
