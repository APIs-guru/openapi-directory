package operations

type PostNetworksIDActionsChangeIPRangePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsChangeIPRangeRequestBodyChangeIPRangeRequest struct {
	IPRange string `json:"ip_range"`
}

type PostNetworksIDActionsChangeIPRangeRequest struct {
	PathParams PostNetworksIDActionsChangeIPRangePathParams
	Request    *PostNetworksIDActionsChangeIPRangeRequestBodyChangeIPRangeRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsChangeIPRange201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsChangeIPRange201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsChangeIPRange201ApplicationJSONActionStatusEnum string

const (
	PostNetworksIDActionsChangeIPRange201ApplicationJSONActionStatusEnumSuccess PostNetworksIDActionsChangeIPRange201ApplicationJSONActionStatusEnum = "success"
	PostNetworksIDActionsChangeIPRange201ApplicationJSONActionStatusEnumRunning PostNetworksIDActionsChangeIPRange201ApplicationJSONActionStatusEnum = "running"
	PostNetworksIDActionsChangeIPRange201ApplicationJSONActionStatusEnumError   PostNetworksIDActionsChangeIPRange201ApplicationJSONActionStatusEnum = "error"
)

type PostNetworksIDActionsChangeIPRange201ApplicationJSONActionAction struct {
	Command   string                                                                `json:"command"`
	Error     PostNetworksIDActionsChangeIPRange201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                `json:"finished"`
	ID        int64                                                                 `json:"id"`
	Progress  float64                                                               `json:"progress"`
	Resources []PostNetworksIDActionsChangeIPRange201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                `json:"started"`
	Status    PostNetworksIDActionsChangeIPRange201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsChangeIPRange201ApplicationJSONActionResponse struct {
	Action PostNetworksIDActionsChangeIPRange201ApplicationJSONActionAction `json:"action"`
}

type PostNetworksIDActionsChangeIPRangeResponse struct {
	ActionResponse *PostNetworksIDActionsChangeIPRange201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
