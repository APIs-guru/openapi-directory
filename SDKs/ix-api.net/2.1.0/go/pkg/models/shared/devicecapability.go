package shared

type DeviceCapability struct {
	Availability *int32  `json:"availability,omitempty"`
	MaxLag       *int32  `json:"max_lag,omitempty"`
	MediaType    *string `json:"media_type,omitempty"`
	Speed        *int64  `json:"speed,omitempty"`
}
