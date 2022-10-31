package shared



type BindDeviceToGatewayRequest struct {
    DeviceID *string `json:"deviceId,omitempty"`
    GatewayID *string `json:"gatewayId,omitempty"`
    
}

