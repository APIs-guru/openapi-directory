package shared

type GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum string

const (
	GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnumDataFormatUnspecified GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum = "DATA_FORMAT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnumBlob                  GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum = "BLOB"
	GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnumJSON                  GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum = "JSON"
)

type GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest struct {
	DataFormat *GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum `json:"dataFormat"`
	Filter     *string                                                             `json:"filter"`
	GcsURI     *string                                                             `json:"gcsUri"`
}
