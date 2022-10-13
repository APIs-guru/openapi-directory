package shared

type ConcurrentAccessRestriction struct {
	DeviceAllowed        *bool   `json:"deviceAllowed"`
	Kind                 *string `json:"kind"`
	MaxConcurrentDevices *int32  `json:"maxConcurrentDevices"`
	Message              *string `json:"message"`
	Nonce                *string `json:"nonce"`
	ReasonCode           *string `json:"reasonCode"`
	Restricted           *bool   `json:"restricted"`
	Signature            *string `json:"signature"`
	Source               *string `json:"source"`
	TimeWindowSeconds    *int32  `json:"timeWindowSeconds"`
	VolumeID             *string `json:"volumeId"`
}
