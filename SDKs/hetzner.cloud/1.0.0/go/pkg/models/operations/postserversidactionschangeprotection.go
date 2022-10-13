package operations

type PostServersIDActionsChangeProtectionPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsChangeProtectionRequestBody struct {
	Delete  *bool `json:"delete"`
	Rebuild *bool `json:"rebuild"`
}

type PostServersIDActionsChangeProtectionRequest struct {
	PathParams PostServersIDActionsChangeProtectionPathParams
	Request    *PostServersIDActionsChangeProtectionRequestBody `request:"mediaType=application/json"`
}

type PostServersIDActionsChangeProtection201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsChangeProtection201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsChangeProtection201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsChangeProtection201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsChangeProtection201ApplicationJSONActionStatusEnumRunning PostServersIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsChangeProtection201ApplicationJSONActionStatusEnumError   PostServersIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsChangeProtection201ApplicationJSONActionAction struct {
	Command   string                                                                  `json:"command"`
	Error     PostServersIDActionsChangeProtection201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                  `json:"finished"`
	ID        int64                                                                   `json:"id"`
	Progress  float64                                                                 `json:"progress"`
	Resources []PostServersIDActionsChangeProtection201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                  `json:"started"`
	Status    PostServersIDActionsChangeProtection201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsChangeProtection201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsChangeProtection201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsChangeProtectionResponse struct {
	ActionResponse *PostServersIDActionsChangeProtection201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
