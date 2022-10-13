package shared

type GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum string

const (
	GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnumReconciliationModeUnspecified GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum = "RECONCILIATION_MODE_UNSPECIFIED"
	GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnumIncremental                   GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum = "INCREMENTAL"
	GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnumFull                          GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum = "FULL"
)

type GoogleCloudRetailV2ImportProductsRequest struct {
	ErrorsConfig            *GoogleCloudRetailV2ImportErrorsConfig                          `json:"errorsConfig"`
	InputConfig             *GoogleCloudRetailV2ProductInputConfig                          `json:"inputConfig"`
	NotificationPubsubTopic *string                                                         `json:"notificationPubsubTopic"`
	ReconciliationMode      *GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum `json:"reconciliationMode"`
	RequestID               *string                                                         `json:"requestId"`
	UpdateMask              *string                                                         `json:"updateMask"`
}
