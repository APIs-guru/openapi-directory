package shared

type GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum string

const (
	GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnumReconciliationModeUnspecified GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum = "RECONCILIATION_MODE_UNSPECIFIED"
	GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnumIncremental                   GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum = "INCREMENTAL"
	GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnumFull                          GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum = "FULL"
)

type GoogleCloudRetailV2alphaImportProductsRequest struct {
	ErrorsConfig                *GoogleCloudRetailV2alphaImportErrorsConfig                          `json:"errorsConfig"`
	InputConfig                 *GoogleCloudRetailV2alphaProductInputConfig                          `json:"inputConfig"`
	NotificationPubsubTopic     *string                                                              `json:"notificationPubsubTopic"`
	ReconciliationMode          *GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum `json:"reconciliationMode"`
	RequestID                   *string                                                              `json:"requestId"`
	SkipDefaultBranchProtection *bool                                                                `json:"skipDefaultBranchProtection"`
	UpdateMask                  *string                                                              `json:"updateMask"`
}
