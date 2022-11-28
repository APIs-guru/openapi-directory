package operations

type PutPlacementGroupsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutPlacementGroupsIDUpdatePlacementGroupRequest struct {
	Labels map[string]interface{} `json:"labels,omitempty"`
	Name   *string                `json:"name,omitempty"`
}

type PutPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum string

const (
	PutPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnumSpread PutPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum = "spread"
)

type PutPlacementGroupsIDPlacementGroupResponsePlacementGroup struct {
	Created string                                                           `json:"created"`
	ID      int64                                                            `json:"id"`
	Labels  map[string]string                                                `json:"labels"`
	Name    string                                                           `json:"name"`
	Servers []int64                                                          `json:"servers"`
	Type    PutPlacementGroupsIDPlacementGroupResponsePlacementGroupTypeEnum `json:"type"`
}

type PutPlacementGroupsIDPlacementGroupResponse struct {
	PlacementGroup PutPlacementGroupsIDPlacementGroupResponsePlacementGroup `json:"placement_group"`
}

type PutPlacementGroupsIDRequest struct {
	PathParams PutPlacementGroupsIDPathParams
	Request    *PutPlacementGroupsIDUpdatePlacementGroupRequest `request:"mediaType=application/json"`
}

type PutPlacementGroupsIDResponse struct {
	ContentType            string
	PlacementGroupResponse *PutPlacementGroupsIDPlacementGroupResponse
	StatusCode             int64
}
