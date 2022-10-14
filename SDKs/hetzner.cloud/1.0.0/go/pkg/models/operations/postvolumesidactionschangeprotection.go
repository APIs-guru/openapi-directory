package operations

type PostVolumesIDActionsChangeProtectionPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostVolumesIDActionsChangeProtectionRequestBody struct {
	Delete *bool `json:"delete,omitempty"`
}

type PostVolumesIDActionsChangeProtectionRequest struct {
	PathParams PostVolumesIDActionsChangeProtectionPathParams
	Request    *PostVolumesIDActionsChangeProtectionRequestBody `request:"mediaType=application/json"`
}

type PostVolumesIDActionsChangeProtection201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostVolumesIDActionsChangeProtection201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostVolumesIDActionsChangeProtection201ApplicationJSONActionStatusEnum string

const (
	PostVolumesIDActionsChangeProtection201ApplicationJSONActionStatusEnumSuccess PostVolumesIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "success"
	PostVolumesIDActionsChangeProtection201ApplicationJSONActionStatusEnumRunning PostVolumesIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "running"
	PostVolumesIDActionsChangeProtection201ApplicationJSONActionStatusEnumError   PostVolumesIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "error"
)

type PostVolumesIDActionsChangeProtection201ApplicationJSONActionAction struct {
	Command   string                                                                  `json:"command"`
	Error     PostVolumesIDActionsChangeProtection201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                  `json:"finished"`
	ID        int64                                                                   `json:"id"`
	Progress  float64                                                                 `json:"progress"`
	Resources []PostVolumesIDActionsChangeProtection201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                  `json:"started"`
	Status    PostVolumesIDActionsChangeProtection201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostVolumesIDActionsChangeProtection201ApplicationJSONActionResponse struct {
	Action PostVolumesIDActionsChangeProtection201ApplicationJSONActionAction `json:"action"`
}

type PostVolumesIDActionsChangeProtectionResponse struct {
	ActionResponse *PostVolumesIDActionsChangeProtection201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
