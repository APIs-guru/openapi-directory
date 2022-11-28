package operations

type PostNetworksIDActionsAddRoutePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsAddRouteAddDeleteRouteRequest struct {
	Destination string `json:"destination"`
	Gateway     string `json:"gateway"`
}

// PostNetworksIDActionsAddRouteActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostNetworksIDActionsAddRouteActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsAddRouteActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsAddRouteActionResponseActionStatusEnum string

const (
	PostNetworksIDActionsAddRouteActionResponseActionStatusEnumSuccess PostNetworksIDActionsAddRouteActionResponseActionStatusEnum = "success"
	PostNetworksIDActionsAddRouteActionResponseActionStatusEnumRunning PostNetworksIDActionsAddRouteActionResponseActionStatusEnum = "running"
	PostNetworksIDActionsAddRouteActionResponseActionStatusEnumError   PostNetworksIDActionsAddRouteActionResponseActionStatusEnum = "error"
)

type PostNetworksIDActionsAddRouteActionResponseAction struct {
	Command   string                                                       `json:"command"`
	Error     PostNetworksIDActionsAddRouteActionResponseActionError       `json:"error"`
	Finished  string                                                       `json:"finished"`
	ID        int64                                                        `json:"id"`
	Progress  float64                                                      `json:"progress"`
	Resources []PostNetworksIDActionsAddRouteActionResponseActionResources `json:"resources"`
	Started   string                                                       `json:"started"`
	Status    PostNetworksIDActionsAddRouteActionResponseActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsAddRouteActionResponse struct {
	Action PostNetworksIDActionsAddRouteActionResponseAction `json:"action"`
}

type PostNetworksIDActionsAddRouteRequest struct {
	PathParams PostNetworksIDActionsAddRoutePathParams
	Request    *PostNetworksIDActionsAddRouteAddDeleteRouteRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsAddRouteResponse struct {
	ActionResponse *PostNetworksIDActionsAddRouteActionResponse
	ContentType    string
	StatusCode     int64
}
