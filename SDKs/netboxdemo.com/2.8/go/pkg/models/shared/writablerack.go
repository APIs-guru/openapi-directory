package shared

type WritableRackOuterUnitEnum string

const (
	WritableRackOuterUnitEnumMm WritableRackOuterUnitEnum = "mm"
	WritableRackOuterUnitEnumIn WritableRackOuterUnitEnum = "in"
)

type WritableRackStatusEnum string

const (
	WritableRackStatusEnumReserved   WritableRackStatusEnum = "reserved"
	WritableRackStatusEnumAvailable  WritableRackStatusEnum = "available"
	WritableRackStatusEnumPlanned    WritableRackStatusEnum = "planned"
	WritableRackStatusEnumActive     WritableRackStatusEnum = "active"
	WritableRackStatusEnumDeprecated WritableRackStatusEnum = "deprecated"
)

type WritableRackTypeEnum string

const (
	WritableRackTypeEnumTwoPostFrame    WritableRackTypeEnum = "2-post-frame"
	WritableRackTypeEnumFourPostFrame   WritableRackTypeEnum = "4-post-frame"
	WritableRackTypeEnumFourPostCabinet WritableRackTypeEnum = "4-post-cabinet"
	WritableRackTypeEnumWallFrame       WritableRackTypeEnum = "wall-frame"
	WritableRackTypeEnumWallCabinet     WritableRackTypeEnum = "wall-cabinet"
)

type WritableRackInput struct {
	AssetTag     *string                    `json:"asset_tag,omitempty"`
	Comments     *string                    `json:"comments,omitempty"`
	CustomFields map[string]interface{}     `json:"custom_fields,omitempty"`
	DescUnits    *bool                      `json:"desc_units,omitempty"`
	FacilityID   *string                    `json:"facility_id,omitempty"`
	Group        *int64                     `json:"group,omitempty"`
	Name         string                     `json:"name"`
	OuterDepth   *int64                     `json:"outer_depth,omitempty"`
	OuterUnit    *WritableRackOuterUnitEnum `json:"outer_unit,omitempty"`
	OuterWidth   *int64                     `json:"outer_width,omitempty"`
	Role         *int64                     `json:"role,omitempty"`
	Serial       *string                    `json:"serial,omitempty"`
	Site         int64                      `json:"site"`
	Status       *WritableRackStatusEnum    `json:"status,omitempty"`
	Tags         []string                   `json:"tags,omitempty"`
	Tenant       *int64                     `json:"tenant,omitempty"`
	Type         *WritableRackTypeEnum      `json:"type,omitempty"`
	UHeight      *int64                     `json:"u_height,omitempty"`
	Width        *int64                     `json:"width,omitempty"`
}
