package shared



type UnbindDeviceFromGatewayRequest struct {
    DeviceID *string `json:"deviceId,omitempty"`
    GatewayID *string `json:"gatewayId,omitempty"`
    
}

