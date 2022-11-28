package operations

type PostNetworksIDActionsDeleteRoutePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsDeleteRouteAddDeleteRouteRequest struct {
	Destination string `json:"destination"`
	Gateway     string `json:"gateway"`
}

// PostNetworksIDActionsDeleteRouteActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostNetworksIDActionsDeleteRouteActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsDeleteRouteActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsDeleteRouteActionResponseActionStatusEnum string

const (
	PostNetworksIDActionsDeleteRouteActionResponseActionStatusEnumSuccess PostNetworksIDActionsDeleteRouteActionResponseActionStatusEnum = "success"
	PostNetworksIDActionsDeleteRouteActionResponseActionStatusEnumRunning PostNetworksIDActionsDeleteRouteActionResponseActionStatusEnum = "running"
	PostNetworksIDActionsDeleteRouteActionResponseActionStatusEnumError   PostNetworksIDActionsDeleteRouteActionResponseActionStatusEnum = "error"
)

type PostNetworksIDActionsDeleteRouteActionResponseAction struct {
	Command   string                                                          `json:"command"`
	Error     PostNetworksIDActionsDeleteRouteActionResponseActionError       `json:"error"`
	Finished  string                                                          `json:"finished"`
	ID        int64                                                           `json:"id"`
	Progress  float64                                                         `json:"progress"`
	Resources []PostNetworksIDActionsDeleteRouteActionResponseActionResources `json:"resources"`
	Started   string                                                          `json:"started"`
	Status    PostNetworksIDActionsDeleteRouteActionResponseActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsDeleteRouteActionResponse struct {
	Action PostNetworksIDActionsDeleteRouteActionResponseAction `json:"action"`
}

type PostNetworksIDActionsDeleteRouteRequest struct {
	PathParams PostNetworksIDActionsDeleteRoutePathParams
	Request    *PostNetworksIDActionsDeleteRouteAddDeleteRouteRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsDeleteRouteResponse struct {
	ActionResponse *PostNetworksIDActionsDeleteRouteActionResponse
	ContentType    string
	StatusCode     int64
}
