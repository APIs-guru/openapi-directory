package shared

type GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum string

const (
	GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnumReconciliationModeUnspecified GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum = "RECONCILIATION_MODE_UNSPECIFIED"
	GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnumIncremental                   GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum = "INCREMENTAL"
	GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnumFull                          GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum = "FULL"
)

type GoogleCloudRetailV2alphaImportProductsRequest struct {
	ErrorsConfig                *GoogleCloudRetailV2alphaImportErrorsConfig                          `json:"errorsConfig,omitempty"`
	InputConfig                 *GoogleCloudRetailV2alphaProductInputConfig                          `json:"inputConfig,omitempty"`
	NotificationPubsubTopic     *string                                                              `json:"notificationPubsubTopic,omitempty"`
	ReconciliationMode          *GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum `json:"reconciliationMode,omitempty"`
	RequestID                   *string                                                              `json:"requestId,omitempty"`
	SkipDefaultBranchProtection *bool                                                                `json:"skipDefaultBranchProtection,omitempty"`
	UpdateMask                  *string                                                              `json:"updateMask,omitempty"`
}
