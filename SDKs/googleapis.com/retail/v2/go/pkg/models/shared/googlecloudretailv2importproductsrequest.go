package shared




type GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum string

const (
    GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnumReconciliationModeUnspecified GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum = "RECONCILIATION_MODE_UNSPECIFIED"
GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnumIncremental GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum = "INCREMENTAL"
GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnumFull GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum = "FULL"
)


type GoogleCloudRetailV2ImportProductsRequest struct {
    ErrorsConfig *GoogleCloudRetailV2ImportErrorsConfig `json:"errorsConfig,omitempty"`
    InputConfig *GoogleCloudRetailV2ProductInputConfig `json:"inputConfig,omitempty"`
    NotificationPubsubTopic *string `json:"notificationPubsubTopic,omitempty"`
    ReconciliationMode *GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum `json:"reconciliationMode,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

