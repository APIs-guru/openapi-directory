package shared

import (
	"time"
)

type WritableRackOuterUnitOuterUnitEnum string

const (
	WritableRackOuterUnitOuterUnitEnumMm WritableRackOuterUnitOuterUnitEnum = "mm"
	WritableRackOuterUnitOuterUnitEnumIn WritableRackOuterUnitOuterUnitEnum = "in"
)

type WritableRackStatusStatusEnum string

const (
	WritableRackStatusStatusEnumReserved   WritableRackStatusStatusEnum = "reserved"
	WritableRackStatusStatusEnumAvailable  WritableRackStatusStatusEnum = "available"
	WritableRackStatusStatusEnumPlanned    WritableRackStatusStatusEnum = "planned"
	WritableRackStatusStatusEnumActive     WritableRackStatusStatusEnum = "active"
	WritableRackStatusStatusEnumDeprecated WritableRackStatusStatusEnum = "deprecated"
)

type WritableRackTypeTypeEnum string

const (
	WritableRackTypeTypeEnumTwoPostFrame    WritableRackTypeTypeEnum = "2-post-frame"
	WritableRackTypeTypeEnumFourPostFrame   WritableRackTypeTypeEnum = "4-post-frame"
	WritableRackTypeTypeEnumFourPostCabinet WritableRackTypeTypeEnum = "4-post-cabinet"
	WritableRackTypeTypeEnumWallFrame       WritableRackTypeTypeEnum = "wall-frame"
	WritableRackTypeTypeEnumWallCabinet     WritableRackTypeTypeEnum = "wall-cabinet"
)

type WritableRack struct {
	AssetTag       *string                             `json:"asset_tag"`
	Comments       *string                             `json:"comments"`
	Created        *time.Time                          `json:"created"`
	CustomFields   map[string]interface{}              `json:"custom_fields"`
	DescUnits      *bool                               `json:"desc_units"`
	DeviceCount    *int64                              `json:"device_count"`
	DisplayName    *string                             `json:"display_name"`
	FacilityID     *string                             `json:"facility_id"`
	Group          *int64                              `json:"group"`
	ID             *int64                              `json:"id"`
	LastUpdated    *time.Time                          `json:"last_updated"`
	Name           string                              `json:"name"`
	OuterDepth     *int64                              `json:"outer_depth"`
	OuterUnit      *WritableRackOuterUnitOuterUnitEnum `json:"outer_unit"`
	OuterWidth     *int64                              `json:"outer_width"`
	PowerfeedCount *int64                              `json:"powerfeed_count"`
	Role           *int64                              `json:"role"`
	Serial         *string                             `json:"serial"`
	Site           int64                               `json:"site"`
	Status         *WritableRackStatusStatusEnum       `json:"status"`
	Tags           []string                            `json:"tags"`
	Tenant         *int64                              `json:"tenant"`
	Type           *WritableRackTypeTypeEnum           `json:"type"`
	UHeight        *int64                              `json:"u_height"`
	Width          *int64                              `json:"width"`
}
