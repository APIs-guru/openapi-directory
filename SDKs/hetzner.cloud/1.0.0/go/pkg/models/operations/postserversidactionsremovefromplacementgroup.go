package operations

type PostServersIDActionsRemoveFromPlacementGroupPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsRemoveFromPlacementGroupRequest struct {
	PathParams PostServersIDActionsRemoveFromPlacementGroupPathParams
}

type PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionStatusEnumRunning PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionStatusEnumError   PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionAction struct {
	Command   string                                                                          `json:"command"`
	Error     PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                          `json:"finished"`
	ID        int64                                                                           `json:"id"`
	Progress  float64                                                                         `json:"progress"`
	Resources []PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                          `json:"started"`
	Status    PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsRemoveFromPlacementGroupResponse struct {
	ActionResponse *PostServersIDActionsRemoveFromPlacementGroup201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
