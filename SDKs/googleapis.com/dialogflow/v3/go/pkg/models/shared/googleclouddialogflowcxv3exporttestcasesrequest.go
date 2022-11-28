package shared

type GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum string

const (
	GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnumDataFormatUnspecified GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum = "DATA_FORMAT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnumBlob                  GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum = "BLOB"
	GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnumJSON                  GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum = "JSON"
)

// GoogleCloudDialogflowCxV3ExportTestCasesRequest
// The request message for TestCases.ExportTestCases.
type GoogleCloudDialogflowCxV3ExportTestCasesRequest struct {
	DataFormat *GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum `json:"dataFormat,omitempty"`
	Filter     *string                                                        `json:"filter,omitempty"`
	GcsURI     *string                                                        `json:"gcsUri,omitempty"`
}
