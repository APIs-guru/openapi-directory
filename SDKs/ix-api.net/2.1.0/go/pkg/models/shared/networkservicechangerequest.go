package shared

type NetworkServiceChangeRequest struct {
	Capacity        *int64 `json:"capacity"`
	ProductOffering string `json:"product_offering"`
}
