package operations

type PostFirewallsIDActionsApplyToResourcesPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector
// Configuration for type label_selector, required if type is `label_selector`
type PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector struct {
	Selector string `json:"selector"`
}

// PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer
// Configuration for type server, required if type is `server`
type PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer struct {
	ID int64 `json:"id"`
}

type PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum string

const (
	PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnumServer        PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum = "server"
	PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnumLabelSelector PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum = "label_selector"
)

type PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources struct {
	LabelSelector *PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector `json:"label_selector,omitempty"`
	Server        *PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer        `json:"server,omitempty"`
	Type          *PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum      `json:"type,omitempty"`
}

type PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequest struct {
	ApplyTo []PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources `json:"apply_to"`
}

// PostFirewallsIDActionsApplyToResourcesActionsResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostFirewallsIDActionsApplyToResourcesActionsResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFirewallsIDActionsApplyToResourcesActionsResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum string

const (
	PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnumSuccess PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum = "success"
	PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnumRunning PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum = "running"
	PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnumError   PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum = "error"
)

type PostFirewallsIDActionsApplyToResourcesActionsResponseAction struct {
	Command   string                                                                 `json:"command"`
	Error     PostFirewallsIDActionsApplyToResourcesActionsResponseActionError       `json:"error"`
	Finished  string                                                                 `json:"finished"`
	ID        int64                                                                  `json:"id"`
	Progress  float64                                                                `json:"progress"`
	Resources []PostFirewallsIDActionsApplyToResourcesActionsResponseActionResources `json:"resources"`
	Started   string                                                                 `json:"started"`
	Status    PostFirewallsIDActionsApplyToResourcesActionsResponseActionStatusEnum  `json:"status"`
}

type PostFirewallsIDActionsApplyToResourcesActionsResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type PostFirewallsIDActionsApplyToResourcesActionsResponseMeta struct {
	Pagination PostFirewallsIDActionsApplyToResourcesActionsResponseMetaPagination `json:"pagination"`
}

type PostFirewallsIDActionsApplyToResourcesActionsResponse struct {
	Actions []PostFirewallsIDActionsApplyToResourcesActionsResponseAction `json:"actions"`
	Meta    *PostFirewallsIDActionsApplyToResourcesActionsResponseMeta    `json:"meta,omitempty"`
}

type PostFirewallsIDActionsApplyToResourcesRequest struct {
	PathParams PostFirewallsIDActionsApplyToResourcesPathParams
	Request    *PostFirewallsIDActionsApplyToResourcesApplyToResourcesRequest `request:"mediaType=application/json"`
}

type PostFirewallsIDActionsApplyToResourcesResponse struct {
	ActionsResponse *PostFirewallsIDActionsApplyToResourcesActionsResponse
	ContentType     string
	StatusCode      int64
}
