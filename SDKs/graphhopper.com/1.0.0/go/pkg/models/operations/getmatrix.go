package operations

import (
	"openapi/pkg/models/shared"
)

type GetMatrixCurbsideEnum string

const (
	GetMatrixCurbsideEnumAny   GetMatrixCurbsideEnum = "any"
	GetMatrixCurbsideEnumRight GetMatrixCurbsideEnum = "right"
	GetMatrixCurbsideEnumLeft  GetMatrixCurbsideEnum = "left"
)

type GetMatrixFromCurbsideEnum string

const (
	GetMatrixFromCurbsideEnumAny   GetMatrixFromCurbsideEnum = "any"
	GetMatrixFromCurbsideEnumRight GetMatrixFromCurbsideEnum = "right"
	GetMatrixFromCurbsideEnumLeft  GetMatrixFromCurbsideEnum = "left"
)

type GetMatrixToCurbsideEnum string

const (
	GetMatrixToCurbsideEnumAny   GetMatrixToCurbsideEnum = "any"
	GetMatrixToCurbsideEnumRight GetMatrixToCurbsideEnum = "right"
	GetMatrixToCurbsideEnumLeft  GetMatrixToCurbsideEnum = "left"
)

type GetMatrixQueryParams struct {
	Curbside       []GetMatrixCurbsideEnum      `queryParam:"style=form,explode=true,name=curbside"`
	FailFast       *bool                        `queryParam:"style=form,explode=true,name=fail_fast"`
	FromCurbside   []GetMatrixFromCurbsideEnum  `queryParam:"style=form,explode=true,name=from_curbside"`
	FromPoint      []string                     `queryParam:"style=form,explode=true,name=from_point"`
	FromPointHint  []string                     `queryParam:"style=form,explode=true,name=from_point_hint"`
	OutArray       []string                     `queryParam:"style=form,explode=true,name=out_array"`
	Point          []string                     `queryParam:"style=form,explode=true,name=point"`
	PointHint      []string                     `queryParam:"style=form,explode=true,name=point_hint"`
	SnapPrevention []string                     `queryParam:"style=form,explode=true,name=snap_prevention"`
	ToCurbside     []GetMatrixToCurbsideEnum    `queryParam:"style=form,explode=true,name=to_curbside"`
	ToPoint        []string                     `queryParam:"style=form,explode=true,name=to_point"`
	ToPointHint    []string                     `queryParam:"style=form,explode=true,name=to_point_hint"`
	TurnCosts      *bool                        `queryParam:"style=form,explode=true,name=turn_costs"`
	Vehicle        *shared.VehicleProfileIDEnum `queryParam:"style=form,explode=true,name=vehicle"`
}

type GetMatrixRequest struct {
	QueryParams GetMatrixQueryParams
}

type GetMatrixResponse struct {
	ContentType    string
	GhError        *shared.GhError
	Headers        map[string][]string
	MatrixResponse *shared.MatrixResponse
	StatusCode     int64
}
