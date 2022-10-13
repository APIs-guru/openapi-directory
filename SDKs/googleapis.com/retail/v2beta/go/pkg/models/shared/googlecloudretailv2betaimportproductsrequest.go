package shared

type GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum string

const (
	GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnumReconciliationModeUnspecified GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum = "RECONCILIATION_MODE_UNSPECIFIED"
	GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnumIncremental                   GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum = "INCREMENTAL"
	GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnumFull                          GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum = "FULL"
)

type GoogleCloudRetailV2betaImportProductsRequest struct {
	ErrorsConfig            *GoogleCloudRetailV2betaImportErrorsConfig                          `json:"errorsConfig"`
	InputConfig             *GoogleCloudRetailV2betaProductInputConfig                          `json:"inputConfig"`
	NotificationPubsubTopic *string                                                             `json:"notificationPubsubTopic"`
	ReconciliationMode      *GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum `json:"reconciliationMode"`
	RequestID               *string                                                             `json:"requestId"`
	UpdateMask              *string                                                             `json:"updateMask"`
}
