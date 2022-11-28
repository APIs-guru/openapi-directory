package operations

type PostFirewallsIDActionsRemoveFromResourcesPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector
// Configuration for type label_selector, required if type is `label_selector`
type PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector struct {
	Selector string `json:"selector"`
}

// PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer
// Configuration for type server, required if type is `server`
type PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer struct {
	ID int64 `json:"id"`
}

type PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum string

const (
	PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnumServer        PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum = "server"
	PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnumLabelSelector PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum = "label_selector"
)

type PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources struct {
	LabelSelector *PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector `json:"label_selector,omitempty"`
	Server        *PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer        `json:"server,omitempty"`
	Type          *PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum      `json:"type,omitempty"`
}

type PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequest struct {
	RemoveFrom []PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources `json:"remove_from"`
}

// PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum string

const (
	PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnumSuccess PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum = "success"
	PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnumRunning PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum = "running"
	PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnumError   PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum = "error"
)

type PostFirewallsIDActionsRemoveFromResourcesActionsResponseAction struct {
	Command   string                                                                    `json:"command"`
	Error     PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionError       `json:"error"`
	Finished  string                                                                    `json:"finished"`
	ID        int64                                                                     `json:"id"`
	Progress  float64                                                                   `json:"progress"`
	Resources []PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionResources `json:"resources"`
	Started   string                                                                    `json:"started"`
	Status    PostFirewallsIDActionsRemoveFromResourcesActionsResponseActionStatusEnum  `json:"status"`
}

type PostFirewallsIDActionsRemoveFromResourcesActionsResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type PostFirewallsIDActionsRemoveFromResourcesActionsResponseMeta struct {
	Pagination PostFirewallsIDActionsRemoveFromResourcesActionsResponseMetaPagination `json:"pagination"`
}

type PostFirewallsIDActionsRemoveFromResourcesActionsResponse struct {
	Actions []PostFirewallsIDActionsRemoveFromResourcesActionsResponseAction `json:"actions"`
	Meta    *PostFirewallsIDActionsRemoveFromResourcesActionsResponseMeta    `json:"meta,omitempty"`
}

type PostFirewallsIDActionsRemoveFromResourcesRequest struct {
	PathParams PostFirewallsIDActionsRemoveFromResourcesPathParams
	Request    *PostFirewallsIDActionsRemoveFromResourcesRemoveFromResourcesRequest `request:"mediaType=application/json"`
}

type PostFirewallsIDActionsRemoveFromResourcesResponse struct {
	ActionsResponse *PostFirewallsIDActionsRemoveFromResourcesActionsResponse
	ContentType     string
	StatusCode      int64
}
