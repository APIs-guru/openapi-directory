package operations

type PostNetworksIDActionsDeleteSubnetPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsDeleteSubnetDeleteSubnetRequest struct {
	IPRange string `json:"ip_range"`
}

// PostNetworksIDActionsDeleteSubnetActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostNetworksIDActionsDeleteSubnetActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsDeleteSubnetActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum string

const (
	PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnumSuccess PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum = "success"
	PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnumRunning PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum = "running"
	PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnumError   PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum = "error"
)

type PostNetworksIDActionsDeleteSubnetActionResponseAction struct {
	Command   string                                                           `json:"command"`
	Error     PostNetworksIDActionsDeleteSubnetActionResponseActionError       `json:"error"`
	Finished  string                                                           `json:"finished"`
	ID        int64                                                            `json:"id"`
	Progress  float64                                                          `json:"progress"`
	Resources []PostNetworksIDActionsDeleteSubnetActionResponseActionResources `json:"resources"`
	Started   string                                                           `json:"started"`
	Status    PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsDeleteSubnetActionResponse struct {
	Action PostNetworksIDActionsDeleteSubnetActionResponseAction `json:"action"`
}

type PostNetworksIDActionsDeleteSubnetRequest struct {
	PathParams PostNetworksIDActionsDeleteSubnetPathParams
	Request    *PostNetworksIDActionsDeleteSubnetDeleteSubnetRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsDeleteSubnetResponse struct {
	ActionResponse *PostNetworksIDActionsDeleteSubnetActionResponse
	ContentType    string
	StatusCode     int64
}
