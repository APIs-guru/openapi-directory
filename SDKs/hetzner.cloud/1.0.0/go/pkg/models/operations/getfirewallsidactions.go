package operations

type GetFirewallsIDActionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFirewallsIDActionsSortParameterSortEnum string

const (
	GetFirewallsIDActionsSortParameterSortEnumID           GetFirewallsIDActionsSortParameterSortEnum = "id"
	GetFirewallsIDActionsSortParameterSortEnumIDAsc        GetFirewallsIDActionsSortParameterSortEnum = "id:asc"
	GetFirewallsIDActionsSortParameterSortEnumIDDesc       GetFirewallsIDActionsSortParameterSortEnum = "id:desc"
	GetFirewallsIDActionsSortParameterSortEnumCommand      GetFirewallsIDActionsSortParameterSortEnum = "command"
	GetFirewallsIDActionsSortParameterSortEnumCommandAsc   GetFirewallsIDActionsSortParameterSortEnum = "command:asc"
	GetFirewallsIDActionsSortParameterSortEnumCommandDesc  GetFirewallsIDActionsSortParameterSortEnum = "command:desc"
	GetFirewallsIDActionsSortParameterSortEnumStatus       GetFirewallsIDActionsSortParameterSortEnum = "status"
	GetFirewallsIDActionsSortParameterSortEnumStatusAsc    GetFirewallsIDActionsSortParameterSortEnum = "status:asc"
	GetFirewallsIDActionsSortParameterSortEnumStatusDesc   GetFirewallsIDActionsSortParameterSortEnum = "status:desc"
	GetFirewallsIDActionsSortParameterSortEnumProgress     GetFirewallsIDActionsSortParameterSortEnum = "progress"
	GetFirewallsIDActionsSortParameterSortEnumProgressAsc  GetFirewallsIDActionsSortParameterSortEnum = "progress:asc"
	GetFirewallsIDActionsSortParameterSortEnumProgressDesc GetFirewallsIDActionsSortParameterSortEnum = "progress:desc"
	GetFirewallsIDActionsSortParameterSortEnumStarted      GetFirewallsIDActionsSortParameterSortEnum = "started"
	GetFirewallsIDActionsSortParameterSortEnumStartedAsc   GetFirewallsIDActionsSortParameterSortEnum = "started:asc"
	GetFirewallsIDActionsSortParameterSortEnumStartedDesc  GetFirewallsIDActionsSortParameterSortEnum = "started:desc"
	GetFirewallsIDActionsSortParameterSortEnumFinished     GetFirewallsIDActionsSortParameterSortEnum = "finished"
	GetFirewallsIDActionsSortParameterSortEnumFinishedAsc  GetFirewallsIDActionsSortParameterSortEnum = "finished:asc"
	GetFirewallsIDActionsSortParameterSortEnumFinishedDesc GetFirewallsIDActionsSortParameterSortEnum = "finished:desc"
)

type GetFirewallsIDActionsStatusParameterStatusEnum string

const (
	GetFirewallsIDActionsStatusParameterStatusEnumRunning GetFirewallsIDActionsStatusParameterStatusEnum = "running"
	GetFirewallsIDActionsStatusParameterStatusEnumSuccess GetFirewallsIDActionsStatusParameterStatusEnum = "success"
	GetFirewallsIDActionsStatusParameterStatusEnumError   GetFirewallsIDActionsStatusParameterStatusEnum = "error"
)

type GetFirewallsIDActionsQueryParams struct {
	Sort   *GetFirewallsIDActionsSortParameterSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Status *GetFirewallsIDActionsStatusParameterStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetFirewallsIDActionsRequest struct {
	PathParams  GetFirewallsIDActionsPathParams
	QueryParams GetFirewallsIDActionsQueryParams
}

type GetFirewallsIDActions200ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetFirewallsIDActions200ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetFirewallsIDActions200ApplicationJSONActionsStatusEnum string

const (
	GetFirewallsIDActions200ApplicationJSONActionsStatusEnumSuccess GetFirewallsIDActions200ApplicationJSONActionsStatusEnum = "success"
	GetFirewallsIDActions200ApplicationJSONActionsStatusEnumRunning GetFirewallsIDActions200ApplicationJSONActionsStatusEnum = "running"
	GetFirewallsIDActions200ApplicationJSONActionsStatusEnumError   GetFirewallsIDActions200ApplicationJSONActionsStatusEnum = "error"
)

type GetFirewallsIDActions200ApplicationJSONActionsAction struct {
	Command   string                                                    `json:"command"`
	Error     GetFirewallsIDActions200ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                    `json:"finished"`
	ID        int64                                                     `json:"id"`
	Progress  float64                                                   `json:"progress"`
	Resources []GetFirewallsIDActions200ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                    `json:"started"`
	Status    GetFirewallsIDActions200ApplicationJSONActionsStatusEnum  `json:"status"`
}

type GetFirewallsIDActions200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetFirewallsIDActions200ApplicationJSONMeta struct {
	Pagination GetFirewallsIDActions200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetFirewallsIDActions200ApplicationJSONActionsResponse struct {
	Actions []GetFirewallsIDActions200ApplicationJSONActionsAction `json:"actions"`
	Meta    *GetFirewallsIDActions200ApplicationJSONMeta           `json:"meta,omitempty"`
}

type GetFirewallsIDActionsResponse struct {
	ActionsResponse *GetFirewallsIDActions200ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
