package operations

type PostNetworksIDActionsChangeProtectionPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsChangeProtectionRequestBodyChangeProtectionRequest struct {
	Delete *bool `json:"delete,omitempty"`
}

type PostNetworksIDActionsChangeProtectionRequest struct {
	PathParams PostNetworksIDActionsChangeProtectionPathParams
	Request    *PostNetworksIDActionsChangeProtectionRequestBodyChangeProtectionRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsChangeProtection201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsChangeProtection201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsChangeProtection201ApplicationJSONActionStatusEnum string

const (
	PostNetworksIDActionsChangeProtection201ApplicationJSONActionStatusEnumSuccess PostNetworksIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "success"
	PostNetworksIDActionsChangeProtection201ApplicationJSONActionStatusEnumRunning PostNetworksIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "running"
	PostNetworksIDActionsChangeProtection201ApplicationJSONActionStatusEnumError   PostNetworksIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "error"
)

type PostNetworksIDActionsChangeProtection201ApplicationJSONActionAction struct {
	Command   string                                                                   `json:"command"`
	Error     PostNetworksIDActionsChangeProtection201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                   `json:"finished"`
	ID        int64                                                                    `json:"id"`
	Progress  float64                                                                  `json:"progress"`
	Resources []PostNetworksIDActionsChangeProtection201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                   `json:"started"`
	Status    PostNetworksIDActionsChangeProtection201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsChangeProtection201ApplicationJSONActionResponse struct {
	Action PostNetworksIDActionsChangeProtection201ApplicationJSONActionAction `json:"action"`
}

type PostNetworksIDActionsChangeProtectionResponse struct {
	ActionResponse *PostNetworksIDActionsChangeProtection201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
