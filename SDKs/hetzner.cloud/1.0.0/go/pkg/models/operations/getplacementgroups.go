package operations

type GetPlacementGroupsSortEnum string

const (
	GetPlacementGroupsSortEnumID          GetPlacementGroupsSortEnum = "id"
	GetPlacementGroupsSortEnumIDAsc       GetPlacementGroupsSortEnum = "id:asc"
	GetPlacementGroupsSortEnumIDDesc      GetPlacementGroupsSortEnum = "id:desc"
	GetPlacementGroupsSortEnumName        GetPlacementGroupsSortEnum = "name"
	GetPlacementGroupsSortEnumNameAsc     GetPlacementGroupsSortEnum = "name:asc"
	GetPlacementGroupsSortEnumNameDesc    GetPlacementGroupsSortEnum = "name:desc"
	GetPlacementGroupsSortEnumCreated     GetPlacementGroupsSortEnum = "created"
	GetPlacementGroupsSortEnumCreatedAsc  GetPlacementGroupsSortEnum = "created:asc"
	GetPlacementGroupsSortEnumCreatedDesc GetPlacementGroupsSortEnum = "created:desc"
)

type GetPlacementGroupsTypeParameterTypeEnum string

const (
	GetPlacementGroupsTypeParameterTypeEnumSpread GetPlacementGroupsTypeParameterTypeEnum = "spread"
)

type GetPlacementGroupsQueryParams struct {
	LabelSelector *string                                  `queryParam:"style=form,explode=true,name=label_selector"`
	Name          *string                                  `queryParam:"style=form,explode=true,name=name"`
	Sort          *GetPlacementGroupsSortEnum              `queryParam:"style=form,explode=true,name=sort"`
	Type          *GetPlacementGroupsTypeParameterTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetPlacementGroupsRequest struct {
	QueryParams GetPlacementGroupsQueryParams
}

type GetPlacementGroupsPlacementGroupsResponseMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetPlacementGroupsPlacementGroupsResponseMeta struct {
	Pagination GetPlacementGroupsPlacementGroupsResponseMetaPagination `json:"pagination"`
}

type GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum string

const (
	GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnumSpread GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum = "spread"
)

type GetPlacementGroupsPlacementGroupsResponsePlacementGroup struct {
	Created string                                                          `json:"created"`
	ID      int64                                                           `json:"id"`
	Labels  map[string]string                                               `json:"labels"`
	Name    string                                                          `json:"name"`
	Servers []int64                                                         `json:"servers"`
	Type    GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum `json:"type"`
}

type GetPlacementGroupsPlacementGroupsResponse struct {
	Meta            *GetPlacementGroupsPlacementGroupsResponseMeta            `json:"meta,omitempty"`
	PlacementGroups []GetPlacementGroupsPlacementGroupsResponsePlacementGroup `json:"placement_groups"`
}

type GetPlacementGroupsResponse struct {
	ContentType             string
	PlacementGroupsResponse *GetPlacementGroupsPlacementGroupsResponse
	StatusCode              int64
}
