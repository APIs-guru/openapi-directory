package shared

type WakeOnLanInfo struct {
	MacAddress *string `json:"MacAddress,omitempty"`
	Port       *int32  `json:"Port,omitempty"`
}
