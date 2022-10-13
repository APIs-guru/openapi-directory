package operations

type PostServersIDActionsAddToPlacementGroupPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsAddToPlacementGroupRequestBodyAddToPlacementGroupRequest struct {
	PlacementGroup int64 `json:"placement_group"`
}

type PostServersIDActionsAddToPlacementGroupRequest struct {
	PathParams PostServersIDActionsAddToPlacementGroupPathParams
	Request    *PostServersIDActionsAddToPlacementGroupRequestBodyAddToPlacementGroupRequest `request:"mediaType=application/json"`
}

type PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionStatusEnumRunning PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionStatusEnumError   PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionAction struct {
	Command   string                                                                     `json:"command"`
	Error     PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                     `json:"finished"`
	ID        int64                                                                      `json:"id"`
	Progress  float64                                                                    `json:"progress"`
	Resources []PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                     `json:"started"`
	Status    PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsAddToPlacementGroupResponse struct {
	ActionResponse *PostServersIDActionsAddToPlacementGroup201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
