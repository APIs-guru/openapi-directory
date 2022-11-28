package shared

type GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum string

const (
	GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnumWriteDispositionUnspecified GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum = "WRITE_DISPOSITION_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnumWriteTruncate               GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum = "WRITE_TRUNCATE"
	GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnumWriteAppend                 GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum = "WRITE_APPEND"
)

// GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest
// The request to export insights.
type GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest struct {
	BigQueryDestination *GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination  `json:"bigQueryDestination,omitempty"`
	Filter              *string                                                                          `json:"filter,omitempty"`
	KmsKey              *string                                                                          `json:"kmsKey,omitempty"`
	Parent              *string                                                                          `json:"parent,omitempty"`
	WriteDisposition    *GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum `json:"writeDisposition,omitempty"`
}
