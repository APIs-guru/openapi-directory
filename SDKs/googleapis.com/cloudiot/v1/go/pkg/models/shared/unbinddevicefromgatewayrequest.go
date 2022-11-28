package shared

// UnbindDeviceFromGatewayRequest
// Request for `UnbindDeviceFromGateway`.
type UnbindDeviceFromGatewayRequest struct {
	DeviceID  *string `json:"deviceId,omitempty"`
	GatewayID *string `json:"gatewayId,omitempty"`
}
