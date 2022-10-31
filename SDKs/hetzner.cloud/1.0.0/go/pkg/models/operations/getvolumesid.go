package operations

type GetVolumesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetVolumesIDRequest struct {
	PathParams GetVolumesIDPathParams
}

type GetVolumesID200ApplicationJSONVolumeLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type GetVolumesID200ApplicationJSONVolumeProtection struct {
	Delete bool `json:"delete"`
}

type GetVolumesID200ApplicationJSONVolumeStatusEnum string

const (
	GetVolumesID200ApplicationJSONVolumeStatusEnumCreating  GetVolumesID200ApplicationJSONVolumeStatusEnum = "creating"
	GetVolumesID200ApplicationJSONVolumeStatusEnumAvailable GetVolumesID200ApplicationJSONVolumeStatusEnum = "available"
)

type GetVolumesID200ApplicationJSONVolume struct {
	Created     string                                         `json:"created"`
	Format      string                                         `json:"format"`
	ID          int64                                          `json:"id"`
	Labels      map[string]string                              `json:"labels"`
	LinuxDevice string                                         `json:"linux_device"`
	Location    GetVolumesID200ApplicationJSONVolumeLocation   `json:"location"`
	Name        string                                         `json:"name"`
	Protection  GetVolumesID200ApplicationJSONVolumeProtection `json:"protection"`
	Server      int64                                          `json:"server"`
	Size        float64                                        `json:"size"`
	Status      GetVolumesID200ApplicationJSONVolumeStatusEnum `json:"status"`
}

type GetVolumesID200ApplicationJSON struct {
	Volume GetVolumesID200ApplicationJSONVolume `json:"volume"`
}

type GetVolumesIDResponse struct {
	ContentType                          string
	GetVolumesID200ApplicationJSONObject *GetVolumesID200ApplicationJSON
	StatusCode                           int64
}
