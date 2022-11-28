package operations

type PostVolumesCreateVolumeRequest struct {
	Automount *bool                  `json:"automount,omitempty"`
	Format    *string                `json:"format,omitempty"`
	Labels    map[string]interface{} `json:"labels,omitempty"`
	Location  *string                `json:"location,omitempty"`
	Name      string                 `json:"name"`
	Server    *int64                 `json:"server,omitempty"`
	Size      int64                  `json:"size"`
}

// PostVolumes201ApplicationJSONActionError
// Error message for the Action if error occurred, otherwise null
type PostVolumes201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostVolumes201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostVolumes201ApplicationJSONActionStatusEnum string

const (
	PostVolumes201ApplicationJSONActionStatusEnumSuccess PostVolumes201ApplicationJSONActionStatusEnum = "success"
	PostVolumes201ApplicationJSONActionStatusEnumRunning PostVolumes201ApplicationJSONActionStatusEnum = "running"
	PostVolumes201ApplicationJSONActionStatusEnumError   PostVolumes201ApplicationJSONActionStatusEnum = "error"
)

type PostVolumes201ApplicationJSONAction struct {
	Command   string                                         `json:"command"`
	Error     PostVolumes201ApplicationJSONActionError       `json:"error"`
	Finished  string                                         `json:"finished"`
	ID        int64                                          `json:"id"`
	Progress  float64                                        `json:"progress"`
	Resources []PostVolumes201ApplicationJSONActionResources `json:"resources"`
	Started   string                                         `json:"started"`
	Status    PostVolumes201ApplicationJSONActionStatusEnum  `json:"status"`
}

// PostVolumes201ApplicationJSONVolumeLocation
// Location of the Volume. Volume can only be attached to Servers in the same Location.
type PostVolumes201ApplicationJSONVolumeLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

// PostVolumes201ApplicationJSONVolumeProtection
// Protection configuration for the Resource
type PostVolumes201ApplicationJSONVolumeProtection struct {
	Delete bool `json:"delete"`
}

type PostVolumes201ApplicationJSONVolumeStatusEnum string

const (
	PostVolumes201ApplicationJSONVolumeStatusEnumCreating  PostVolumes201ApplicationJSONVolumeStatusEnum = "creating"
	PostVolumes201ApplicationJSONVolumeStatusEnumAvailable PostVolumes201ApplicationJSONVolumeStatusEnum = "available"
)

type PostVolumes201ApplicationJSONVolume struct {
	Created     string                                        `json:"created"`
	Format      string                                        `json:"format"`
	ID          int64                                         `json:"id"`
	Labels      map[string]string                             `json:"labels"`
	LinuxDevice string                                        `json:"linux_device"`
	Location    PostVolumes201ApplicationJSONVolumeLocation   `json:"location"`
	Name        string                                        `json:"name"`
	Protection  PostVolumes201ApplicationJSONVolumeProtection `json:"protection"`
	Server      int64                                         `json:"server"`
	Size        float64                                       `json:"size"`
	Status      PostVolumes201ApplicationJSONVolumeStatusEnum `json:"status"`
}

type PostVolumes201ApplicationJSON struct {
	Action      PostVolumes201ApplicationJSONAction   `json:"action"`
	NextActions []PostVolumes201ApplicationJSONAction `json:"next_actions"`
	Volume      PostVolumes201ApplicationJSONVolume   `json:"volume"`
}

type PostVolumesRequest struct {
	Request *PostVolumesCreateVolumeRequest `request:"mediaType=application/json"`
}

type PostVolumesResponse struct {
	ContentType                         string
	PostVolumes201ApplicationJSONObject *PostVolumes201ApplicationJSON
	StatusCode                          int64
}
