package shared

type GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum string

const (
	GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnumReconciliationModeUnspecified GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum = "RECONCILIATION_MODE_UNSPECIFIED"
	GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnumIncremental                   GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum = "INCREMENTAL"
	GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnumFull                          GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum = "FULL"
)

// GoogleCloudDiscoveryengineV1betaImportDocumentsRequest
// Request message for Import methods.
type GoogleCloudDiscoveryengineV1betaImportDocumentsRequest struct {
	BigquerySource     *GoogleCloudDiscoveryengineV1betaBigQuerySource                               `json:"bigquerySource,omitempty"`
	ErrorConfig        *GoogleCloudDiscoveryengineV1betaImportErrorConfig                            `json:"errorConfig,omitempty"`
	GcsSource          *GoogleCloudDiscoveryengineV1betaGcsSource                                    `json:"gcsSource,omitempty"`
	InlineSource       *GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource           `json:"inlineSource,omitempty"`
	ReconciliationMode *GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum `json:"reconciliationMode,omitempty"`
}
