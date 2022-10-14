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
	AssetTag       *string                             `json:"asset_tag,omitempty"`
	Comments       *string                             `json:"comments,omitempty"`
	Created        *time.Time                          `json:"created,omitempty"`
	CustomFields   map[string]interface{}              `json:"custom_fields,omitempty"`
	DescUnits      *bool                               `json:"desc_units,omitempty"`
	DeviceCount    *int64                              `json:"device_count,omitempty"`
	DisplayName    *string                             `json:"display_name,omitempty"`
	FacilityID     *string                             `json:"facility_id,omitempty"`
	Group          *int64                              `json:"group,omitempty"`
	ID             *int64                              `json:"id,omitempty"`
	LastUpdated    *time.Time                          `json:"last_updated,omitempty"`
	Name           string                              `json:"name"`
	OuterDepth     *int64                              `json:"outer_depth,omitempty"`
	OuterUnit      *WritableRackOuterUnitOuterUnitEnum `json:"outer_unit,omitempty"`
	OuterWidth     *int64                              `json:"outer_width,omitempty"`
	PowerfeedCount *int64                              `json:"powerfeed_count,omitempty"`
	Role           *int64                              `json:"role,omitempty"`
	Serial         *string                             `json:"serial,omitempty"`
	Site           int64                               `json:"site"`
	Status         *WritableRackStatusStatusEnum       `json:"status,omitempty"`
	Tags           []string                            `json:"tags,omitempty"`
	Tenant         *int64                              `json:"tenant,omitempty"`
	Type           *WritableRackTypeTypeEnum           `json:"type,omitempty"`
	UHeight        *int64                              `json:"u_height,omitempty"`
	Width          *int64                              `json:"width,omitempty"`
}
