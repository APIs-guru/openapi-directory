package shared

type BindDeviceToGatewayRequest struct {
	DeviceID  *string `json:"deviceId"`
	GatewayID *string `json:"gatewayId"`
}
