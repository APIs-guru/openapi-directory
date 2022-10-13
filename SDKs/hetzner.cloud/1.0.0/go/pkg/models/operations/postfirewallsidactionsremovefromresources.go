package operations

type PostFirewallsIDActionsRemoveFromResourcesPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromLabelSelector struct {
	Selector string `json:"selector"`
}

type PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromServer struct {
	ID int64 `json:"id"`
}

type PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromTypeEnum string

const (
	PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromTypeEnumServer        PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromTypeEnum = "server"
	PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromTypeEnumLabelSelector PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromTypeEnum = "label_selector"
)

type PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromFirewallRemoveFromResources struct {
	LabelSelector *PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromLabelSelector `json:"label_selector"`
	Server        *PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromServer        `json:"server"`
	Type          *PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromTypeEnum      `json:"type"`
}

type PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromResourcesRequest struct {
	RemoveFrom []PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromFirewallRemoveFromResources `json:"remove_from"`
}

type PostFirewallsIDActionsRemoveFromResourcesRequest struct {
	PathParams PostFirewallsIDActionsRemoveFromResourcesPathParams
	Request    *PostFirewallsIDActionsRemoveFromResourcesRequestBodyRemoveFromResourcesRequest `request:"mediaType=application/json"`
}

type PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsStatusEnum string

const (
	PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsStatusEnumSuccess PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsStatusEnum = "success"
	PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsStatusEnumRunning PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsStatusEnum = "running"
	PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsStatusEnumError   PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsStatusEnum = "error"
)

type PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsAction struct {
	Command   string                                                                        `json:"command"`
	Error     PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                                        `json:"finished"`
	ID        int64                                                                         `json:"id"`
	Progress  float64                                                                       `json:"progress"`
	Resources []PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                                        `json:"started"`
	Status    PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsStatusEnum  `json:"status"`
}

type PostFirewallsIDActionsRemoveFromResources201ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type PostFirewallsIDActionsRemoveFromResources201ApplicationJSONMeta struct {
	Pagination PostFirewallsIDActionsRemoveFromResources201ApplicationJSONMetaPagination `json:"pagination"`
}

type PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsResponse struct {
	Actions []PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsAction `json:"actions"`
	Meta    *PostFirewallsIDActionsRemoveFromResources201ApplicationJSONMeta           `json:"meta"`
}

type PostFirewallsIDActionsRemoveFromResourcesResponse struct {
	ActionsResponse *PostFirewallsIDActionsRemoveFromResources201ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
