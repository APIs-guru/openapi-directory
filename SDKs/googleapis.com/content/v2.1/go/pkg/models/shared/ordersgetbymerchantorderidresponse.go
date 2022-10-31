package shared



type OrdersGetByMerchantOrderIDResponse struct {
    Kind *string `json:"kind,omitempty"`
    Order *Order `json:"order,omitempty"`
    
}

