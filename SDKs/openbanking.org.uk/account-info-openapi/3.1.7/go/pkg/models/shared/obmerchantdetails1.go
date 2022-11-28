package shared

// ObMerchantDetails1
// Details of the merchant involved in the transaction.
type ObMerchantDetails1 struct {
	MerchantCategoryCode *string `json:"MerchantCategoryCode,omitempty"`
	MerchantName         *string `json:"MerchantName,omitempty"`
}
