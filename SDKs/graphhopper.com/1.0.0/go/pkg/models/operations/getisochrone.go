package operations

import (
	"openapi/pkg/models/shared"
)

type GetIsochroneWeightingEnum string

const (
	GetIsochroneWeightingEnumFastest  GetIsochroneWeightingEnum = "fastest"
	GetIsochroneWeightingEnumShortest GetIsochroneWeightingEnum = "shortest"
)

type GetIsochroneQueryParams struct {
	Buckets       *int32                       `queryParam:"style=form,explode=true,name=buckets"`
	DistanceLimit *int32                       `queryParam:"style=form,explode=true,name=distance_limit"`
	Point         string                       `queryParam:"style=form,explode=true,name=point"`
	ReverseFlow   *bool                        `queryParam:"style=form,explode=true,name=reverse_flow"`
	TimeLimit     *int32                       `queryParam:"style=form,explode=true,name=time_limit"`
	Vehicle       *shared.VehicleProfileIDEnum `queryParam:"style=form,explode=true,name=vehicle"`
	Weighting     *GetIsochroneWeightingEnum   `queryParam:"style=form,explode=true,name=weighting"`
}

type GetIsochroneRequest struct {
	QueryParams GetIsochroneQueryParams
}

type GetIsochroneResponse struct {
	ContentType       string
	GhError           *shared.GhError
	IsochroneResponse *shared.IsochroneResponse
	StatusCode        int64
}
