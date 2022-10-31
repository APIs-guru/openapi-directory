package shared

type ConcurrentAccessRestriction struct {
	DeviceAllowed        *bool   `json:"deviceAllowed,omitempty"`
	Kind                 *string `json:"kind,omitempty"`
	MaxConcurrentDevices *int32  `json:"maxConcurrentDevices,omitempty"`
	Message              *string `json:"message,omitempty"`
	Nonce                *string `json:"nonce,omitempty"`
	ReasonCode           *string `json:"reasonCode,omitempty"`
	Restricted           *bool   `json:"restricted,omitempty"`
	Signature            *string `json:"signature,omitempty"`
	Source               *string `json:"source,omitempty"`
	TimeWindowSeconds    *int32  `json:"timeWindowSeconds,omitempty"`
	VolumeID             *string `json:"volumeId,omitempty"`
}
