package operations

type PostServersIDActionsRemoveFromPlacementGroupPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostServersIDActionsRemoveFromPlacementGroupActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostServersIDActionsRemoveFromPlacementGroupActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsRemoveFromPlacementGroupActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsRemoveFromPlacementGroupActionResponseActionStatusEnum string

const (
	PostServersIDActionsRemoveFromPlacementGroupActionResponseActionStatusEnumSuccess PostServersIDActionsRemoveFromPlacementGroupActionResponseActionStatusEnum = "success"
	PostServersIDActionsRemoveFromPlacementGroupActionResponseActionStatusEnumRunning PostServersIDActionsRemoveFromPlacementGroupActionResponseActionStatusEnum = "running"
	PostServersIDActionsRemoveFromPlacementGroupActionResponseActionStatusEnumError   PostServersIDActionsRemoveFromPlacementGroupActionResponseActionStatusEnum = "error"
)

type PostServersIDActionsRemoveFromPlacementGroupActionResponseAction struct {
	Command   string                                                                      `json:"command"`
	Error     PostServersIDActionsRemoveFromPlacementGroupActionResponseActionError       `json:"error"`
	Finished  string                                                                      `json:"finished"`
	ID        int64                                                                       `json:"id"`
	Progress  float64                                                                     `json:"progress"`
	Resources []PostServersIDActionsRemoveFromPlacementGroupActionResponseActionResources `json:"resources"`
	Started   string                                                                      `json:"started"`
	Status    PostServersIDActionsRemoveFromPlacementGroupActionResponseActionStatusEnum  `json:"status"`
}

type PostServersIDActionsRemoveFromPlacementGroupActionResponse struct {
	Action PostServersIDActionsRemoveFromPlacementGroupActionResponseAction `json:"action"`
}

type PostServersIDActionsRemoveFromPlacementGroupRequest struct {
	PathParams PostServersIDActionsRemoveFromPlacementGroupPathParams
}

type PostServersIDActionsRemoveFromPlacementGroupResponse struct {
	ActionResponse *PostServersIDActionsRemoveFromPlacementGroupActionResponse
	ContentType    string
	StatusCode     int64
}
