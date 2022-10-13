package operations

type PostNetworksIDActionsAddRoutePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsAddRouteRequestBodyAddDeleteRouteRequest struct {
	Destination string `json:"destination"`
	Gateway     string `json:"gateway"`
}

type PostNetworksIDActionsAddRouteRequest struct {
	PathParams PostNetworksIDActionsAddRoutePathParams
	Request    *PostNetworksIDActionsAddRouteRequestBodyAddDeleteRouteRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsAddRoute201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsAddRoute201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsAddRoute201ApplicationJSONActionStatusEnum string

const (
	PostNetworksIDActionsAddRoute201ApplicationJSONActionStatusEnumSuccess PostNetworksIDActionsAddRoute201ApplicationJSONActionStatusEnum = "success"
	PostNetworksIDActionsAddRoute201ApplicationJSONActionStatusEnumRunning PostNetworksIDActionsAddRoute201ApplicationJSONActionStatusEnum = "running"
	PostNetworksIDActionsAddRoute201ApplicationJSONActionStatusEnumError   PostNetworksIDActionsAddRoute201ApplicationJSONActionStatusEnum = "error"
)

type PostNetworksIDActionsAddRoute201ApplicationJSONActionAction struct {
	Command   string                                                           `json:"command"`
	Error     PostNetworksIDActionsAddRoute201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                           `json:"finished"`
	ID        int64                                                            `json:"id"`
	Progress  float64                                                          `json:"progress"`
	Resources []PostNetworksIDActionsAddRoute201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                           `json:"started"`
	Status    PostNetworksIDActionsAddRoute201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsAddRoute201ApplicationJSONActionResponse struct {
	Action PostNetworksIDActionsAddRoute201ApplicationJSONActionAction `json:"action"`
}

type PostNetworksIDActionsAddRouteResponse struct {
	ActionResponse *PostNetworksIDActionsAddRoute201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
