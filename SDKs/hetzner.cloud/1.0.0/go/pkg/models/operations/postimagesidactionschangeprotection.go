package operations

type PostImagesIDActionsChangeProtectionPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostImagesIDActionsChangeProtectionRequestBody struct {
	Delete *bool `json:"delete"`
}

type PostImagesIDActionsChangeProtectionRequest struct {
	PathParams PostImagesIDActionsChangeProtectionPathParams
	Request    *PostImagesIDActionsChangeProtectionRequestBody `request:"mediaType=application/json"`
}

type PostImagesIDActionsChangeProtection201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostImagesIDActionsChangeProtection201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostImagesIDActionsChangeProtection201ApplicationJSONActionStatusEnum string

const (
	PostImagesIDActionsChangeProtection201ApplicationJSONActionStatusEnumSuccess PostImagesIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "success"
	PostImagesIDActionsChangeProtection201ApplicationJSONActionStatusEnumRunning PostImagesIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "running"
	PostImagesIDActionsChangeProtection201ApplicationJSONActionStatusEnumError   PostImagesIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "error"
)

type PostImagesIDActionsChangeProtection201ApplicationJSONActionAction struct {
	Command   string                                                                 `json:"command"`
	Error     PostImagesIDActionsChangeProtection201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                 `json:"finished"`
	ID        int64                                                                  `json:"id"`
	Progress  float64                                                                `json:"progress"`
	Resources []PostImagesIDActionsChangeProtection201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                 `json:"started"`
	Status    PostImagesIDActionsChangeProtection201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostImagesIDActionsChangeProtection201ApplicationJSONActionResponse struct {
	Action PostImagesIDActionsChangeProtection201ApplicationJSONActionAction `json:"action"`
}

type PostImagesIDActionsChangeProtectionResponse struct {
	ActionResponse *PostImagesIDActionsChangeProtection201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
