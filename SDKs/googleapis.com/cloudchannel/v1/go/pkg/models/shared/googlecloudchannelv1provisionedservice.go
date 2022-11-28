package shared

// GoogleCloudChannelV1ProvisionedService
// Service provisioned for an entitlement.
type GoogleCloudChannelV1ProvisionedService struct {
	ProductID      *string `json:"productId,omitempty"`
	ProvisioningID *string `json:"provisioningId,omitempty"`
	SkuID          *string `json:"skuId,omitempty"`
}
