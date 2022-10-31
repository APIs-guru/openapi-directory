package operations

import (
"openapi/pkg/models/shared")


type GetRouteAlgorithmEnum string

const (
    GetRouteAlgorithmEnumRoundTrip GetRouteAlgorithmEnum = "round_trip"
GetRouteAlgorithmEnumAlternativeRoute GetRouteAlgorithmEnum = "alternative_route"
)



type GetRouteCurbsideEnum string

const (
    GetRouteCurbsideEnumAny GetRouteCurbsideEnum = "any"
GetRouteCurbsideEnumRight GetRouteCurbsideEnum = "right"
GetRouteCurbsideEnumLeft GetRouteCurbsideEnum = "left"
)


type GetRouteQueryParams struct {
    Algorithm *GetRouteAlgorithmEnum `queryParam:"style=form,explode=true,name=algorithm"`
    AlternativeRouteMaxPaths *int32 `queryParam:"style=form,explode=true,name=alternative_route.max_paths"`
    AlternativeRouteMaxShareFactor *float64 `queryParam:"style=form,explode=true,name=alternative_route.max_share_factor"`
    AlternativeRouteMaxWeightFactor *float64 `queryParam:"style=form,explode=true,name=alternative_route.max_weight_factor"`
    Avoid *string `queryParam:"style=form,explode=true,name=avoid"`
    BlockArea *string `queryParam:"style=form,explode=true,name=block_area"`
    CalcPoints *bool `queryParam:"style=form,explode=true,name=calc_points"`
    ChDisable *bool `queryParam:"style=form,explode=true,name=ch.disable"`
    Curbside []GetRouteCurbsideEnum `queryParam:"style=form,explode=true,name=curbside"`
    Debug *bool `queryParam:"style=form,explode=true,name=debug"`
    Details []string `queryParam:"style=form,explode=true,name=details"`
    Elevation *bool `queryParam:"style=form,explode=true,name=elevation"`
    Heading []int32 `queryParam:"style=form,explode=true,name=heading"`
    HeadingPenalty *int32 `queryParam:"style=form,explode=true,name=heading_penalty"`
    Instructions *bool `queryParam:"style=form,explode=true,name=instructions"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    Optimize *string `queryParam:"style=form,explode=true,name=optimize"`
    PassThrough *bool `queryParam:"style=form,explode=true,name=pass_through"`
    Point []string `queryParam:"style=form,explode=true,name=point"`
    PointHint []string `queryParam:"style=form,explode=true,name=point_hint"`
    PointsEncoded *bool `queryParam:"style=form,explode=true,name=points_encoded"`
    RoundTripDistance *int32 `queryParam:"style=form,explode=true,name=round_trip.distance"`
    RoundTripSeed *int64 `queryParam:"style=form,explode=true,name=round_trip.seed"`
    SnapPrevention []string `queryParam:"style=form,explode=true,name=snap_prevention"`
    TurnCosts *bool `queryParam:"style=form,explode=true,name=turn_costs"`
    Vehicle *shared.VehicleProfileIDEnum `queryParam:"style=form,explode=true,name=vehicle"`
    Weighting *string `queryParam:"style=form,explode=true,name=weighting"`
    
}

type GetRouteRequest struct {
    QueryParams GetRouteQueryParams 
    
}

type GetRouteResponse struct {
    ContentType string 
    GhError *shared.GhError 
    Headers map[string][]string 
    RouteResponse *shared.RouteResponse 
    StatusCode int64 
    
}

