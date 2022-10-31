package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRacksElevationPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRacksElevationFaceEnum string

const (
	DcimRacksElevationFaceEnumFront DcimRacksElevationFaceEnum = "front"
	DcimRacksElevationFaceEnumRear  DcimRacksElevationFaceEnum = "rear"
)

type DcimRacksElevationRenderEnum string

const (
	DcimRacksElevationRenderEnumJSON DcimRacksElevationRenderEnum = "json"
	DcimRacksElevationRenderEnumSvg  DcimRacksElevationRenderEnum = "svg"
)

type DcimRacksElevationQueryParams struct {
	Exclude       *int64                        `queryParam:"style=form,explode=true,name=exclude"`
	ExpandDevices *bool                         `queryParam:"style=form,explode=true,name=expand_devices"`
	Face          *DcimRacksElevationFaceEnum   `queryParam:"style=form,explode=true,name=face"`
	IncludeImages *bool                         `queryParam:"style=form,explode=true,name=include_images"`
	LegendWidth   *int64                        `queryParam:"style=form,explode=true,name=legend_width"`
	Q             *string                       `queryParam:"style=form,explode=true,name=q"`
	Render        *DcimRacksElevationRenderEnum `queryParam:"style=form,explode=true,name=render"`
	UnitHeight    *int64                        `queryParam:"style=form,explode=true,name=unit_height"`
	UnitWidth     *int64                        `queryParam:"style=form,explode=true,name=unit_width"`
}

type DcimRacksElevationRequest struct {
	PathParams  DcimRacksElevationPathParams
	QueryParams DcimRacksElevationQueryParams
}

type DcimRacksElevationResponse struct {
	ContentType string
	RackUnits   []shared.RackUnit
	StatusCode  int64
}
