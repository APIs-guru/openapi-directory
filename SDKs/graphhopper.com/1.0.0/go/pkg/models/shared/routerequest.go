package shared




type RouteRequestAlgorithmEnum string

const (
    RouteRequestAlgorithmEnumRoundTrip RouteRequestAlgorithmEnum = "round_trip"
RouteRequestAlgorithmEnumAlternativeRoute RouteRequestAlgorithmEnum = "alternative_route"
)



type RouteRequestCurbsidesEnum string

const (
    RouteRequestCurbsidesEnumAny RouteRequestCurbsidesEnum = "any"
RouteRequestCurbsidesEnumRight RouteRequestCurbsidesEnum = "right"
RouteRequestCurbsidesEnumLeft RouteRequestCurbsidesEnum = "left"
)


type RouteRequest struct {
    Algorithm *RouteRequestAlgorithmEnum `json:"algorithm,omitempty"`
    AlternativeRouteMaxPaths *int32 `json:"alternative_route.max_paths,omitempty"`
    AlternativeRouteMaxShareFactor *float64 `json:"alternative_route.max_share_factor,omitempty"`
    AlternativeRouteMaxWeightFactor *float64 `json:"alternative_route.max_weight_factor,omitempty"`
    Avoid *string `json:"avoid,omitempty"`
    BlockArea *string `json:"block_area,omitempty"`
    CalcPoints *bool `json:"calc_points,omitempty"`
    ChDisable *bool `json:"ch.disable,omitempty"`
    Curbsides []RouteRequestCurbsidesEnum `json:"curbsides,omitempty"`
    Debug *bool `json:"debug,omitempty"`
    Details []string `json:"details,omitempty"`
    Elevation *bool `json:"elevation,omitempty"`
    HeadingPenalty *int32 `json:"heading_penalty,omitempty"`
    Headings []int32 `json:"headings,omitempty"`
    Instructions *bool `json:"instructions,omitempty"`
    Locale *string `json:"locale,omitempty"`
    Optimize *string `json:"optimize,omitempty"`
    PassThrough *bool `json:"pass_through,omitempty"`
    PointHints []string `json:"point_hints,omitempty"`
    Points [][]float64 `json:"points,omitempty"`
    PointsEncoded *bool `json:"points_encoded,omitempty"`
    RoundTripDistance *int32 `json:"round_trip.distance,omitempty"`
    RoundTripSeed *int64 `json:"round_trip.seed,omitempty"`
    SnapPreventions []string `json:"snap_preventions,omitempty"`
    Vehicle *VehicleProfileIDEnum `json:"vehicle,omitempty"`
    Weighting *string `json:"weighting,omitempty"`
    
}

