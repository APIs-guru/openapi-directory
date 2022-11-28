package operations

type PostNetworksIDActionsChangeIPRangePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsChangeIPRangeChangeIPRangeRequest struct {
	IPRange string `json:"ip_range"`
}

// PostNetworksIDActionsChangeIPRangeActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostNetworksIDActionsChangeIPRangeActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsChangeIPRangeActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsChangeIPRangeActionResponseActionStatusEnum string

const (
	PostNetworksIDActionsChangeIPRangeActionResponseActionStatusEnumSuccess PostNetworksIDActionsChangeIPRangeActionResponseActionStatusEnum = "success"
	PostNetworksIDActionsChangeIPRangeActionResponseActionStatusEnumRunning PostNetworksIDActionsChangeIPRangeActionResponseActionStatusEnum = "running"
	PostNetworksIDActionsChangeIPRangeActionResponseActionStatusEnumError   PostNetworksIDActionsChangeIPRangeActionResponseActionStatusEnum = "error"
)

type PostNetworksIDActionsChangeIPRangeActionResponseAction struct {
	Command   string                                                            `json:"command"`
	Error     PostNetworksIDActionsChangeIPRangeActionResponseActionError       `json:"error"`
	Finished  string                                                            `json:"finished"`
	ID        int64                                                             `json:"id"`
	Progress  float64                                                           `json:"progress"`
	Resources []PostNetworksIDActionsChangeIPRangeActionResponseActionResources `json:"resources"`
	Started   string                                                            `json:"started"`
	Status    PostNetworksIDActionsChangeIPRangeActionResponseActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsChangeIPRangeActionResponse struct {
	Action PostNetworksIDActionsChangeIPRangeActionResponseAction `json:"action"`
}

type PostNetworksIDActionsChangeIPRangeRequest struct {
	PathParams PostNetworksIDActionsChangeIPRangePathParams
	Request    *PostNetworksIDActionsChangeIPRangeChangeIPRangeRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsChangeIPRangeResponse struct {
	ActionResponse *PostNetworksIDActionsChangeIPRangeActionResponse
	ContentType    string
	StatusCode     int64
}
