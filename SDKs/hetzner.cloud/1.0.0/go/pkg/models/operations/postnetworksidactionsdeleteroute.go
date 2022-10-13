package operations

type PostNetworksIDActionsDeleteRoutePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsDeleteRouteRequestBodyAddDeleteRouteRequest struct {
	Destination string `json:"destination"`
	Gateway     string `json:"gateway"`
}

type PostNetworksIDActionsDeleteRouteRequest struct {
	PathParams PostNetworksIDActionsDeleteRoutePathParams
	Request    *PostNetworksIDActionsDeleteRouteRequestBodyAddDeleteRouteRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsDeleteRoute201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsDeleteRoute201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsDeleteRoute201ApplicationJSONActionStatusEnum string

const (
	PostNetworksIDActionsDeleteRoute201ApplicationJSONActionStatusEnumSuccess PostNetworksIDActionsDeleteRoute201ApplicationJSONActionStatusEnum = "success"
	PostNetworksIDActionsDeleteRoute201ApplicationJSONActionStatusEnumRunning PostNetworksIDActionsDeleteRoute201ApplicationJSONActionStatusEnum = "running"
	PostNetworksIDActionsDeleteRoute201ApplicationJSONActionStatusEnumError   PostNetworksIDActionsDeleteRoute201ApplicationJSONActionStatusEnum = "error"
)

type PostNetworksIDActionsDeleteRoute201ApplicationJSONActionAction struct {
	Command   string                                                              `json:"command"`
	Error     PostNetworksIDActionsDeleteRoute201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                              `json:"finished"`
	ID        int64                                                               `json:"id"`
	Progress  float64                                                             `json:"progress"`
	Resources []PostNetworksIDActionsDeleteRoute201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                              `json:"started"`
	Status    PostNetworksIDActionsDeleteRoute201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsDeleteRoute201ApplicationJSONActionResponse struct {
	Action PostNetworksIDActionsDeleteRoute201ApplicationJSONActionAction `json:"action"`
}

type PostNetworksIDActionsDeleteRouteResponse struct {
	ActionResponse *PostNetworksIDActionsDeleteRoute201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
