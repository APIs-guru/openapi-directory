package shared

// LicenseAssignment
// Representation of a license assignment.
type LicenseAssignment struct {
	Etags       *string `json:"etags,omitempty"`
	Kind        *string `json:"kind,omitempty"`
	ProductID   *string `json:"productId,omitempty"`
	ProductName *string `json:"productName,omitempty"`
	SelfLink    *string `json:"selfLink,omitempty"`
	SkuID       *string `json:"skuId,omitempty"`
	SkuName     *string `json:"skuName,omitempty"`
	UserID      *string `json:"userId,omitempty"`
}
