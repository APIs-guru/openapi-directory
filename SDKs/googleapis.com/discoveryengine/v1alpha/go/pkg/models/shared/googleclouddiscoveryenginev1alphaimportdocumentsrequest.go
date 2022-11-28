package shared

type GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum string

const (
	GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnumReconciliationModeUnspecified GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum = "RECONCILIATION_MODE_UNSPECIFIED"
	GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnumIncremental                   GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum = "INCREMENTAL"
	GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnumFull                          GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum = "FULL"
)

// GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest
// Request message for Import methods.
type GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest struct {
	BigquerySource     *GoogleCloudDiscoveryengineV1alphaBigQuerySource                               `json:"bigquerySource,omitempty"`
	ErrorConfig        *GoogleCloudDiscoveryengineV1alphaImportErrorConfig                            `json:"errorConfig,omitempty"`
	GcsSource          *GoogleCloudDiscoveryengineV1alphaGcsSource                                    `json:"gcsSource,omitempty"`
	InlineSource       *GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource           `json:"inlineSource,omitempty"`
	ReconciliationMode *GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum `json:"reconciliationMode,omitempty"`
}
