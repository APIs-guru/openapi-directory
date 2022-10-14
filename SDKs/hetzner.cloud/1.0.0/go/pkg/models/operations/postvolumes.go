package operations

type PostVolumesRequestBodyCreateVolumeRequest struct {
	Automount *bool                  `json:"automount,omitempty"`
	Format    *string                `json:"format,omitempty"`
	Labels    map[string]interface{} `json:"labels,omitempty"`
	Location  *string                `json:"location,omitempty"`
	Name      string                 `json:"name"`
	Server    *int64                 `json:"server,omitempty"`
	Size      int64                  `json:"size"`
}

type PostVolumesRequest struct {
	Request *PostVolumesRequestBodyCreateVolumeRequest `request:"mediaType=application/json"`
}

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

type PostVolumes201ApplicationJSONActionAction struct {
	Command   string                                         `json:"command"`
	Error     PostVolumes201ApplicationJSONActionError       `json:"error"`
	Finished  string                                         `json:"finished"`
	ID        int64                                          `json:"id"`
	Progress  float64                                        `json:"progress"`
	Resources []PostVolumes201ApplicationJSONActionResources `json:"resources"`
	Started   string                                         `json:"started"`
	Status    PostVolumes201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostVolumes201ApplicationJSONNextActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostVolumes201ApplicationJSONNextActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostVolumes201ApplicationJSONNextActionsStatusEnum string

const (
	PostVolumes201ApplicationJSONNextActionsStatusEnumSuccess PostVolumes201ApplicationJSONNextActionsStatusEnum = "success"
	PostVolumes201ApplicationJSONNextActionsStatusEnumRunning PostVolumes201ApplicationJSONNextActionsStatusEnum = "running"
	PostVolumes201ApplicationJSONNextActionsStatusEnumError   PostVolumes201ApplicationJSONNextActionsStatusEnum = "error"
)

type PostVolumes201ApplicationJSONNextActionsAction struct {
	Command   string                                              `json:"command"`
	Error     PostVolumes201ApplicationJSONNextActionsError       `json:"error"`
	Finished  string                                              `json:"finished"`
	ID        int64                                               `json:"id"`
	Progress  float64                                             `json:"progress"`
	Resources []PostVolumes201ApplicationJSONNextActionsResources `json:"resources"`
	Started   string                                              `json:"started"`
	Status    PostVolumes201ApplicationJSONNextActionsStatusEnum  `json:"status"`
}

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
	Action      PostVolumes201ApplicationJSONActionAction        `json:"action"`
	NextActions []PostVolumes201ApplicationJSONNextActionsAction `json:"next_actions"`
	Volume      PostVolumes201ApplicationJSONVolume              `json:"volume"`
}

type PostVolumesResponse struct {
	ContentType                         string
	PostVolumes201ApplicationJSONObject *PostVolumes201ApplicationJSON
	StatusCode                          int64
}
