package operations

type GetImagesIDActionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetImagesIDActionsSortParameterSortEnum string

const (
	GetImagesIDActionsSortParameterSortEnumID           GetImagesIDActionsSortParameterSortEnum = "id"
	GetImagesIDActionsSortParameterSortEnumIDAsc        GetImagesIDActionsSortParameterSortEnum = "id:asc"
	GetImagesIDActionsSortParameterSortEnumIDDesc       GetImagesIDActionsSortParameterSortEnum = "id:desc"
	GetImagesIDActionsSortParameterSortEnumCommand      GetImagesIDActionsSortParameterSortEnum = "command"
	GetImagesIDActionsSortParameterSortEnumCommandAsc   GetImagesIDActionsSortParameterSortEnum = "command:asc"
	GetImagesIDActionsSortParameterSortEnumCommandDesc  GetImagesIDActionsSortParameterSortEnum = "command:desc"
	GetImagesIDActionsSortParameterSortEnumStatus       GetImagesIDActionsSortParameterSortEnum = "status"
	GetImagesIDActionsSortParameterSortEnumStatusAsc    GetImagesIDActionsSortParameterSortEnum = "status:asc"
	GetImagesIDActionsSortParameterSortEnumStatusDesc   GetImagesIDActionsSortParameterSortEnum = "status:desc"
	GetImagesIDActionsSortParameterSortEnumProgress     GetImagesIDActionsSortParameterSortEnum = "progress"
	GetImagesIDActionsSortParameterSortEnumProgressAsc  GetImagesIDActionsSortParameterSortEnum = "progress:asc"
	GetImagesIDActionsSortParameterSortEnumProgressDesc GetImagesIDActionsSortParameterSortEnum = "progress:desc"
	GetImagesIDActionsSortParameterSortEnumStarted      GetImagesIDActionsSortParameterSortEnum = "started"
	GetImagesIDActionsSortParameterSortEnumStartedAsc   GetImagesIDActionsSortParameterSortEnum = "started:asc"
	GetImagesIDActionsSortParameterSortEnumStartedDesc  GetImagesIDActionsSortParameterSortEnum = "started:desc"
	GetImagesIDActionsSortParameterSortEnumFinished     GetImagesIDActionsSortParameterSortEnum = "finished"
	GetImagesIDActionsSortParameterSortEnumFinishedAsc  GetImagesIDActionsSortParameterSortEnum = "finished:asc"
	GetImagesIDActionsSortParameterSortEnumFinishedDesc GetImagesIDActionsSortParameterSortEnum = "finished:desc"
)

type GetImagesIDActionsStatusParameterStatusEnum string

const (
	GetImagesIDActionsStatusParameterStatusEnumRunning GetImagesIDActionsStatusParameterStatusEnum = "running"
	GetImagesIDActionsStatusParameterStatusEnumSuccess GetImagesIDActionsStatusParameterStatusEnum = "success"
	GetImagesIDActionsStatusParameterStatusEnumError   GetImagesIDActionsStatusParameterStatusEnum = "error"
)

type GetImagesIDActionsQueryParams struct {
	Sort   *GetImagesIDActionsSortParameterSortEnum     `queryParam:"style=form,explode=true,name=sort"`
	Status *GetImagesIDActionsStatusParameterStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetImagesIDActionsRequest struct {
	PathParams  GetImagesIDActionsPathParams
	QueryParams GetImagesIDActionsQueryParams
}

type GetImagesIDActions200ApplicationJSONActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetImagesIDActions200ApplicationJSONActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetImagesIDActions200ApplicationJSONActionsStatusEnum string

const (
	GetImagesIDActions200ApplicationJSONActionsStatusEnumSuccess GetImagesIDActions200ApplicationJSONActionsStatusEnum = "success"
	GetImagesIDActions200ApplicationJSONActionsStatusEnumRunning GetImagesIDActions200ApplicationJSONActionsStatusEnum = "running"
	GetImagesIDActions200ApplicationJSONActionsStatusEnumError   GetImagesIDActions200ApplicationJSONActionsStatusEnum = "error"
)

type GetImagesIDActions200ApplicationJSONActionsAction struct {
	Command   string                                                 `json:"command"`
	Error     GetImagesIDActions200ApplicationJSONActionsError       `json:"error"`
	Finished  string                                                 `json:"finished"`
	ID        int64                                                  `json:"id"`
	Progress  float64                                                `json:"progress"`
	Resources []GetImagesIDActions200ApplicationJSONActionsResources `json:"resources"`
	Started   string                                                 `json:"started"`
	Status    GetImagesIDActions200ApplicationJSONActionsStatusEnum  `json:"status"`
}

type GetImagesIDActions200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetImagesIDActions200ApplicationJSONMeta struct {
	Pagination GetImagesIDActions200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetImagesIDActions200ApplicationJSONActionsResponse struct {
	Actions []GetImagesIDActions200ApplicationJSONActionsAction `json:"actions"`
	Meta    *GetImagesIDActions200ApplicationJSONMeta           `json:"meta"`
}

type GetImagesIDActionsResponse struct {
	ActionsResponse *GetImagesIDActions200ApplicationJSONActionsResponse
	ContentType     string
	StatusCode      int64
}
