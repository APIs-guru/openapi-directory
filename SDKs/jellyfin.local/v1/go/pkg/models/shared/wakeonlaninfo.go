package shared

type WakeOnLanInfo struct {
	MacAddress *string `json:"MacAddress"`
	Port       *int32  `json:"Port"`
}
