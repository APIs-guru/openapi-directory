package operations

type GetNetworksIDActionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetNetworksIDActionsSortParameterSortEnum string

const (
	GetNetworksIDActionsSortParameterSortEnumID           GetNetworksIDActionsSortParameterSortEnum = "id"
	GetNetworksIDActionsSortParameterSortEnumIDAsc        GetNetworksIDActionsSortParameterSortEnum = "id:asc"
	GetNetworksIDActionsSortParameterSortEnumIDDesc       GetNetworksIDActionsSortParameterSortEnum = "id:desc"
	GetNetworksIDActionsSortParameterSortEnumCommand      GetNetworksIDActionsSortParameterSortEnum = "command"
	GetNetworksIDActionsSortParameterSortEnumCommandAsc   GetNetworksIDActionsSortParameterSortEnum = "command:asc"
	GetNetworksIDActionsSortParameterSortEnumCommandDesc  GetNetworksIDActionsSortParameterSortEnum = "command:desc"
	GetNetworksIDActionsSortParameterSortEnumStatus       GetNetworksIDActionsSortParameterSortEnum = "status"
	GetNetworksIDActionsSortParameterSortEnumStatusAsc    GetNetworksIDActionsSortParameterSortEnum = "status:asc"
	GetNetworksIDActionsSortParameterSortEnumStatusDesc   GetNetworksIDActionsSortParameterSortEnum = "status:desc"
	GetNetworksIDActionsSortParameterSortEnumProgress     GetNetworksIDActionsSortParameterSortEnum = "progress"
	GetNetworksIDActionsSortParameterSortEnumProgressAsc  GetNetworksIDActionsSortParameterSortEnum = "progress:asc"
	GetNetworksIDActionsSortParameterSortEnumProgressDesc GetNetworksIDActionsSortParameterSortEnum = "progress:desc"
	GetNetworksIDActionsSortParameterSortEnumStarted      GetNetworksIDActionsSortParameterSortEnum = "started"
	GetNetworksIDActionsSortParameterSortEnumStartedAsc   GetNetworksIDActionsSortParameterSortEnum = "started:asc"
	GetNetworksIDActionsSortParameterSortEnumStartedDesc  GetNetworksIDActionsSortParameterSortEnum = "started:desc"
	GetNetworksIDActionsSortParameterSortEnumFinished     GetNetworksIDActionsSortParameterSortEnum = "finished"
	GetNetworksIDActionsSortParameterSortEnumFinishedAsc  GetNetworksIDActionsSortParameterSortEnum = "finished:asc"
	GetNetworksIDActionsSortParameterSortEnumFinishedDesc GetNetworksIDActionsSortParameterSortEnum = "finished:desc"
)

type GetNetworksIDActionsStatusParameterStatusEnum string

const (
	GetNetworksIDActionsStatusParameterStatusEnumRunning GetNetworksIDActionsStatusParameterStatusEnum = "running"
	GetNetworksIDActionsStatusParameterStatusEnumSuccess GetNetworksIDActionsStatusParameterStatusEnum = "success"
	GetNetworksIDActionsStatusParameterStatusEnumError   GetNetworksIDActionsStatusParameterStatusEnum = "error"
)

type GetNetworksIDActionsQueryParams struct {
	Sort   *GetNetworksIDActionsSortParameterSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Status *GetNetworksIDActionsStatusParameterStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetNetworksIDActionsRequest struct {
	PathParams  GetNetworksIDActionsPathParams
	QueryParams GetNetworksIDActionsQueryParams
}

type GetNetworksIDActions200ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetNetworksIDActions200ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetNetworksIDActions200ApplicationJSONActionsStatusEnum string

const (
	GetNetworksIDActions200ApplicationJSONActionsStatusEnumSuccess GetNetworksIDActions200ApplicationJSONActionsStatusEnum = "success"
	GetNetworksIDActions200ApplicationJSONActionsStatusEnumRunning GetNetworksIDActions200ApplicationJSONActionsStatusEnum = "running"
	GetNetworksIDActions200ApplicationJSONActionsStatusEnumError   GetNetworksIDActions200ApplicationJSONActionsStatusEnum = "error"
)

type GetNetworksIDActions200ApplicationJSONActionsAction struct {
	Command   string                                                   `json:"command"`
	Error     GetNetworksIDActions200ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                   `json:"finished"`
	ID        int64                                                    `json:"id"`
	Progress  float64                                                  `json:"progress"`
	Resources []GetNetworksIDActions200ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                   `json:"started"`
	Status    GetNetworksIDActions200ApplicationJSONActionsStatusEnum  `json:"status"`
}

type GetNetworksIDActions200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetNetworksIDActions200ApplicationJSONMeta struct {
	Pagination GetNetworksIDActions200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetNetworksIDActions200ApplicationJSONActionsResponse struct {
	Actions []GetNetworksIDActions200ApplicationJSONActionsAction `json:"actions"`
	Meta    *GetNetworksIDActions200ApplicationJSONMeta           `json:"meta"`
}

type GetNetworksIDActionsResponse struct {
	ActionsResponse *GetNetworksIDActions200ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
