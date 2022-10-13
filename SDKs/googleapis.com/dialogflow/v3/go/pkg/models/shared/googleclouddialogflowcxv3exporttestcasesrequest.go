package shared

type GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum string

const (
	GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnumDataFormatUnspecified GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum = "DATA_FORMAT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnumBlob                  GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum = "BLOB"
	GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnumJSON                  GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum = "JSON"
)

type GoogleCloudDialogflowCxV3ExportTestCasesRequest struct {
	DataFormat *GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum `json:"dataFormat"`
	Filter     *string                                                        `json:"filter"`
	GcsURI     *string                                                        `json:"gcsUri"`
}
