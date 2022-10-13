package shared

type LicenseAssignment struct {
	Etags       *string `json:"etags"`
	Kind        *string `json:"kind"`
	ProductID   *string `json:"productId"`
	ProductName *string `json:"productName"`
	SelfLink    *string `json:"selfLink"`
	SkuID       *string `json:"skuId"`
	SkuName     *string `json:"skuName"`
	UserID      *string `json:"userId"`
}
