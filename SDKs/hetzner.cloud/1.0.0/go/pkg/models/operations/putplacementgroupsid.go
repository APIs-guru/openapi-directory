package operations

type PutPlacementGroupsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutPlacementGroupsIDRequestBodyUpdatePlacementGroupRequest struct {
	Labels map[string]interface{} `json:"labels,omitempty"`
	Name   *string                `json:"name,omitempty"`
}

type PutPlacementGroupsIDRequest struct {
	PathParams PutPlacementGroupsIDPathParams
	Request    *PutPlacementGroupsIDRequestBodyUpdatePlacementGroupRequest `request:"mediaType=application/json"`
}

type PutPlacementGroupsID200ApplicationJSONPlacementGroupTypeEnum string

const (
	PutPlacementGroupsID200ApplicationJSONPlacementGroupTypeEnumSpread PutPlacementGroupsID200ApplicationJSONPlacementGroupTypeEnum = "spread"
)

type PutPlacementGroupsID200ApplicationJSONPlacementGroupPlacementGroup struct {
	Created string                                                       `json:"created"`
	ID      int64                                                        `json:"id"`
	Labels  map[string]string                                            `json:"labels"`
	Name    string                                                       `json:"name"`
	Servers []int64                                                      `json:"servers"`
	Type    PutPlacementGroupsID200ApplicationJSONPlacementGroupTypeEnum `json:"type"`
}

type PutPlacementGroupsID200ApplicationJSONPlacementGroupResponse struct {
	PlacementGroup PutPlacementGroupsID200ApplicationJSONPlacementGroupPlacementGroup `json:"placement_group"`
}

type PutPlacementGroupsIDResponse struct {
	ContentType            string
	PlacementGroupResponse *PutPlacementGroupsID200ApplicationJSONPlacementGroupResponse
	StatusCode             int64
}
