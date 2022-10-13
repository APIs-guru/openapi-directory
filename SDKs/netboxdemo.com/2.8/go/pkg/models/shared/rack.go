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

type RackOuterUnitOuterUnit struct {
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

type RackStatusStatus struct {
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

type RackTypeType struct {
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

type RackWidthWidth struct {
	Label RackWidthLabelEnum `json:"label"`
	Value int64              `json:"value"`
}

type Rack struct {
	AssetTag       *string                 `json:"asset_tag"`
	Comments       *string                 `json:"comments"`
	Created        *time.Time              `json:"created"`
	CustomFields   map[string]interface{}  `json:"custom_fields"`
	DescUnits      *bool                   `json:"desc_units"`
	DeviceCount    *int64                  `json:"device_count"`
	DisplayName    *string                 `json:"display_name"`
	FacilityID     *string                 `json:"facility_id"`
	Group          *NestedRackGroup        `json:"group"`
	ID             *int64                  `json:"id"`
	LastUpdated    *time.Time              `json:"last_updated"`
	Name           string                  `json:"name"`
	OuterDepth     *int64                  `json:"outer_depth"`
	OuterUnit      *RackOuterUnitOuterUnit `json:"outer_unit"`
	OuterWidth     *int64                  `json:"outer_width"`
	PowerfeedCount *int64                  `json:"powerfeed_count"`
	Role           *NestedRackRole         `json:"role"`
	Serial         *string                 `json:"serial"`
	Site           NestedSite              `json:"site"`
	Status         *RackStatusStatus       `json:"status"`
	Tags           []string                `json:"tags"`
	Tenant         *NestedTenant           `json:"tenant"`
	Type           *RackTypeType           `json:"type"`
	UHeight        *int64                  `json:"u_height"`
	Width          *RackWidthWidth         `json:"width"`
}
