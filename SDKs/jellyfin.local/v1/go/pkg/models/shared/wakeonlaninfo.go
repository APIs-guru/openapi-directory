package shared

// WakeOnLanInfo
// Provides the MAC address and port for wake-on-LAN functionality.
type WakeOnLanInfo struct {
	MacAddress *string `json:"MacAddress,omitempty"`
	Port       *int32  `json:"Port,omitempty"`
}
