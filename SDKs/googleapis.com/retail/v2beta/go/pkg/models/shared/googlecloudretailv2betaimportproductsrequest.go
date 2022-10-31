package shared

type GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum string

const (
	GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnumReconciliationModeUnspecified GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum = "RECONCILIATION_MODE_UNSPECIFIED"
	GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnumIncremental                   GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum = "INCREMENTAL"
	GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnumFull                          GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum = "FULL"
)

type GoogleCloudRetailV2betaImportProductsRequest struct {
	ErrorsConfig            *GoogleCloudRetailV2betaImportErrorsConfig                          `json:"errorsConfig,omitempty"`
	InputConfig             *GoogleCloudRetailV2betaProductInputConfig                          `json:"inputConfig,omitempty"`
	NotificationPubsubTopic *string                                                             `json:"notificationPubsubTopic,omitempty"`
	ReconciliationMode      *GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum `json:"reconciliationMode,omitempty"`
	RequestID               *string                                                             `json:"requestId,omitempty"`
	UpdateMask              *string                                                             `json:"updateMask,omitempty"`
}
