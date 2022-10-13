package operations

type PostFirewallsIDActionsApplyToResourcesPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToLabelSelector struct {
	Selector string `json:"selector"`
}

type PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToServer struct {
	ID int64 `json:"id"`
}

type PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToTypeEnum string

const (
	PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToTypeEnumServer        PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToTypeEnum = "server"
	PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToTypeEnumLabelSelector PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToTypeEnum = "label_selector"
)

type PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToFirewallApplyToResources struct {
	LabelSelector *PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToLabelSelector `json:"label_selector"`
	Server        *PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToServer        `json:"server"`
	Type          *PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToTypeEnum      `json:"type"`
}

type PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToResourcesRequest struct {
	ApplyTo []PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToFirewallApplyToResources `json:"apply_to"`
}

type PostFirewallsIDActionsApplyToResourcesRequest struct {
	PathParams PostFirewallsIDActionsApplyToResourcesPathParams
	Request    *PostFirewallsIDActionsApplyToResourcesRequestBodyApplyToResourcesRequest `request:"mediaType=application/json"`
}

type PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsStatusEnum string

const (
	PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsStatusEnumSuccess PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsStatusEnum = "success"
	PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsStatusEnumRunning PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsStatusEnum = "running"
	PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsStatusEnumError   PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsStatusEnum = "error"
)

type PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsAction struct {
	Command   string                                                                     `json:"command"`
	Error     PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                                     `json:"finished"`
	ID        int64                                                                      `json:"id"`
	Progress  float64                                                                    `json:"progress"`
	Resources []PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                                     `json:"started"`
	Status    PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsStatusEnum  `json:"status"`
}

type PostFirewallsIDActionsApplyToResources201ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type PostFirewallsIDActionsApplyToResources201ApplicationJSONMeta struct {
	Pagination PostFirewallsIDActionsApplyToResources201ApplicationJSONMetaPagination `json:"pagination"`
}

type PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsResponse struct {
	Actions []PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsAction `json:"actions"`
	Meta    *PostFirewallsIDActionsApplyToResources201ApplicationJSONMeta           `json:"meta"`
}

type PostFirewallsIDActionsApplyToResourcesResponse struct {
	ActionsResponse *PostFirewallsIDActionsApplyToResources201ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
