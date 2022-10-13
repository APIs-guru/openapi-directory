package shared

type GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum string

const (
	GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnumWriteDispositionUnspecified GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum = "WRITE_DISPOSITION_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnumWriteTruncate               GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum = "WRITE_TRUNCATE"
	GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnumWriteAppend                 GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum = "WRITE_APPEND"
)

type GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest struct {
	BigQueryDestination *GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination  `json:"bigQueryDestination"`
	Filter              *string                                                                          `json:"filter"`
	KmsKey              *string                                                                          `json:"kmsKey"`
	Parent              *string                                                                          `json:"parent"`
	WriteDisposition    *GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum `json:"writeDisposition"`
}
