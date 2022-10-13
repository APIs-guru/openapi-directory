package shared

type UnbindDeviceFromGatewayRequest struct {
	DeviceID  *string `json:"deviceId"`
	GatewayID *string `json:"gatewayId"`
}
