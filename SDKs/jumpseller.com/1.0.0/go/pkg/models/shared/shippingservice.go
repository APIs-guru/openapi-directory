package shared

type ShippingService struct {
	ID          *int32  `json:"id"`
	Name        *string `json:"name"`
	ServiceCode *string `json:"service_code"`
}
