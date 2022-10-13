package shared

type DeviceCapability struct {
	Availability *int32  `json:"availability"`
	MaxLag       *int32  `json:"max_lag"`
	MediaType    *string `json:"media_type"`
	Speed        *int64  `json:"speed"`
}
