package operations

type PutVolumesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutVolumesIDRequestBodyLabels struct {
	Labelkey *string `json:"labelkey,omitempty"`
}

type PutVolumesIDRequestBodyUpdateVolumeRequest struct {
	Labels *PutVolumesIDRequestBodyLabels `json:"labels,omitempty"`
	Name   string                         `json:"name"`
}

type PutVolumesIDRequest struct {
	PathParams PutVolumesIDPathParams
	Request    *PutVolumesIDRequestBodyUpdateVolumeRequest `request:"mediaType=application/json"`
}

type PutVolumesID200ApplicationJSONVolumeLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type PutVolumesID200ApplicationJSONVolumeProtection struct {
	Delete bool `json:"delete"`
}

type PutVolumesID200ApplicationJSONVolumeStatusEnum string

const (
	PutVolumesID200ApplicationJSONVolumeStatusEnumCreating  PutVolumesID200ApplicationJSONVolumeStatusEnum = "creating"
	PutVolumesID200ApplicationJSONVolumeStatusEnumAvailable PutVolumesID200ApplicationJSONVolumeStatusEnum = "available"
)

type PutVolumesID200ApplicationJSONVolume struct {
	Created     string                                         `json:"created"`
	Format      string                                         `json:"format"`
	ID          int64                                          `json:"id"`
	Labels      map[string]string                              `json:"labels"`
	LinuxDevice string                                         `json:"linux_device"`
	Location    PutVolumesID200ApplicationJSONVolumeLocation   `json:"location"`
	Name        string                                         `json:"name"`
	Protection  PutVolumesID200ApplicationJSONVolumeProtection `json:"protection"`
	Server      int64                                          `json:"server"`
	Size        float64                                        `json:"size"`
	Status      PutVolumesID200ApplicationJSONVolumeStatusEnum `json:"status"`
}

type PutVolumesID200ApplicationJSON struct {
	Volume PutVolumesID200ApplicationJSONVolume `json:"volume"`
}

type PutVolumesIDResponse struct {
	ContentType                          string
	PutVolumesID200ApplicationJSONObject *PutVolumesID200ApplicationJSON
	StatusCode                           int64
}
