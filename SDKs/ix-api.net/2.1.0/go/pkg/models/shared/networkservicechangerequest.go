package shared

type NetworkServiceChangeRequest struct {
	Capacity        *int64 `json:"capacity,omitempty"`
	ProductOffering string `json:"product_offering"`
}
