package shared

import (
	"time"
)

type RackOuterUnitLabelEnum string

const (
	RackOuterUnitLabelEnumMillimeters RackOuterUnitLabelEnum = "Millimeters"
	RackOuterUnitLabelEnumInches      RackOuterUnitLabelEnum = "Inches"
)

type RackOuterUnitValueEnum string

const (
	RackOuterUnitValueEnumMm RackOuterUnitValueEnum = "mm"
	RackOuterUnitValueEnumIn RackOuterUnitValueEnum = "in"
)

type RackOuterUnit struct {
	Label RackOuterUnitLabelEnum `json:"label"`
	Value RackOuterUnitValueEnum `json:"value"`
}

type RackStatusLabelEnum string

const (
	RackStatusLabelEnumReserved   RackStatusLabelEnum = "Reserved"
	RackStatusLabelEnumAvailable  RackStatusLabelEnum = "Available"
	RackStatusLabelEnumPlanned    RackStatusLabelEnum = "Planned"
	RackStatusLabelEnumActive     RackStatusLabelEnum = "Active"
	RackStatusLabelEnumDeprecated RackStatusLabelEnum = "Deprecated"
)

type RackStatusValueEnum string

const (
	RackStatusValueEnumReserved   RackStatusValueEnum = "reserved"
	RackStatusValueEnumAvailable  RackStatusValueEnum = "available"
	RackStatusValueEnumPlanned    RackStatusValueEnum = "planned"
	RackStatusValueEnumActive     RackStatusValueEnum = "active"
	RackStatusValueEnumDeprecated RackStatusValueEnum = "deprecated"
)

type RackStatus struct {
	Label RackStatusLabelEnum `json:"label"`
	Value RackStatusValueEnum `json:"value"`
}

type RackTypeLabelEnum string

const (
	RackTypeLabelEnumTwoPostFrame       RackTypeLabelEnum = "2-post frame"
	RackTypeLabelEnumFourPostFrame      RackTypeLabelEnum = "4-post frame"
	RackTypeLabelEnumFourPostCabinet    RackTypeLabelEnum = "4-post cabinet"
	RackTypeLabelEnumWallMountedFrame   RackTypeLabelEnum = "Wall-mounted frame"
	RackTypeLabelEnumWallMountedCabinet RackTypeLabelEnum = "Wall-mounted cabinet"
)

type RackTypeValueEnum string

const (
	RackTypeValueEnumTwoPostFrame    RackTypeValueEnum = "2-post-frame"
	RackTypeValueEnumFourPostFrame   RackTypeValueEnum = "4-post-frame"
	RackTypeValueEnumFourPostCabinet RackTypeValueEnum = "4-post-cabinet"
	RackTypeValueEnumWallFrame       RackTypeValueEnum = "wall-frame"
	RackTypeValueEnumWallCabinet     RackTypeValueEnum = "wall-cabinet"
)

type RackType struct {
	Label RackTypeLabelEnum `json:"label"`
	Value RackTypeValueEnum `json:"value"`
}

type RackWidthLabelEnum string

const (
	RackWidthLabelEnumTenInches         RackWidthLabelEnum = "10 inches"
	RackWidthLabelEnumNineteenInches    RackWidthLabelEnum = "19 inches"
	RackWidthLabelEnumTwentyOneInches   RackWidthLabelEnum = "21 inches"
	RackWidthLabelEnumTwentyThreeInches RackWidthLabelEnum = "23 inches"
)

type RackWidth struct {
	Label RackWidthLabelEnum `json:"label"`
	Value int64              `json:"value"`
}

type Rack struct {
	AssetTag       *string                `json:"asset_tag,omitempty"`
	Comments       *string                `json:"comments,omitempty"`
	Created        *time.Time             `json:"created,omitempty"`
	CustomFields   map[string]interface{} `json:"custom_fields,omitempty"`
	DescUnits      *bool                  `json:"desc_units,omitempty"`
	DeviceCount    *int64                 `json:"device_count,omitempty"`
	DisplayName    *string                `json:"display_name,omitempty"`
	FacilityID     *string                `json:"facility_id,omitempty"`
	Group          *NestedRackGroup       `json:"group,omitempty"`
	ID             *int64                 `json:"id,omitempty"`
	LastUpdated    *time.Time             `json:"last_updated,omitempty"`
	Name           string                 `json:"name"`
	OuterDepth     *int64                 `json:"outer_depth,omitempty"`
	OuterUnit      *RackOuterUnit         `json:"outer_unit,omitempty"`
	OuterWidth     *int64                 `json:"outer_width,omitempty"`
	PowerfeedCount *int64                 `json:"powerfeed_count,omitempty"`
	Role           *NestedRackRole        `json:"role,omitempty"`
	Serial         *string                `json:"serial,omitempty"`
	Site           NestedSite             `json:"site"`
	Status         *RackStatus            `json:"status,omitempty"`
	Tags           []string               `json:"tags,omitempty"`
	Tenant         *NestedTenant          `json:"tenant,omitempty"`
	Type           *RackType              `json:"type,omitempty"`
	UHeight        *int64                 `json:"u_height,omitempty"`
	Width          *RackWidth             `json:"width,omitempty"`
}
