package shared

type GoogleCloudRetailV2ProductDetail struct {
	Product  *GoogleCloudRetailV2Product `json:"product"`
	Quantity *int32                      `json:"quantity"`
}
