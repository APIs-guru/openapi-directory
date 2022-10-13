package operations

type PostPlacementGroupsRequestBodyTypeEnum string

const (
	PostPlacementGroupsRequestBodyTypeEnumSpread PostPlacementGroupsRequestBodyTypeEnum = "spread"
)

type PostPlacementGroupsRequestBodyCreatePlacementGroupRequest struct {
	Labels map[string]interface{}                 `json:"labels"`
	Name   string                                 `json:"name"`
	Type   PostPlacementGroupsRequestBodyTypeEnum `json:"type"`
}

type PostPlacementGroupsRequest struct {
	Request *PostPlacementGroupsRequestBodyCreatePlacementGroupRequest `request:"mediaType=application/json"`
}

type PostPlacementGroups201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostPlacementGroups201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostPlacementGroups201ApplicationJSONActionStatusEnum string

const (
	PostPlacementGroups201ApplicationJSONActionStatusEnumSuccess PostPlacementGroups201ApplicationJSONActionStatusEnum = "success"
	PostPlacementGroups201ApplicationJSONActionStatusEnumRunning PostPlacementGroups201ApplicationJSONActionStatusEnum = "running"
	PostPlacementGroups201ApplicationJSONActionStatusEnumError   PostPlacementGroups201ApplicationJSONActionStatusEnum = "error"
)

type PostPlacementGroups201ApplicationJSONActionNullableAction struct {
	Command   string                                                 `json:"command"`
	Error     PostPlacementGroups201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                 `json:"finished"`
	ID        int64                                                  `json:"id"`
	Progress  float64                                                `json:"progress"`
	Resources []PostPlacementGroups201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                 `json:"started"`
	Status    PostPlacementGroups201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostPlacementGroups201ApplicationJSONPlacementGroupTypeEnum string

const (
	PostPlacementGroups201ApplicationJSONPlacementGroupTypeEnumSpread PostPlacementGroups201ApplicationJSONPlacementGroupTypeEnum = "spread"
)

type PostPlacementGroups201ApplicationJSONPlacementGroupPlacementGroup struct {
	Created string                                                      `json:"created"`
	ID      int64                                                       `json:"id"`
	Labels  map[string]string                                           `json:"labels"`
	Name    string                                                      `json:"name"`
	Servers []int64                                                     `json:"servers"`
	Type    PostPlacementGroups201ApplicationJSONPlacementGroupTypeEnum `json:"type"`
}

type PostPlacementGroups201ApplicationJSONCreatePlacementGroupResponse struct {
	Action         *PostPlacementGroups201ApplicationJSONActionNullableAction        `json:"action"`
	PlacementGroup PostPlacementGroups201ApplicationJSONPlacementGroupPlacementGroup `json:"placement_group"`
}

type PostPlacementGroupsResponse struct {
	ContentType                  string
	CreatePlacementGroupResponse *PostPlacementGroups201ApplicationJSONCreatePlacementGroupResponse
	StatusCode                   int64
}
