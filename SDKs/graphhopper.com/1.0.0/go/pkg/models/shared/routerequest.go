package shared

type RouteRequestAlgorithmEnum string

const (
	RouteRequestAlgorithmEnumRoundTrip        RouteRequestAlgorithmEnum = "round_trip"
	RouteRequestAlgorithmEnumAlternativeRoute RouteRequestAlgorithmEnum = "alternative_route"
)

type RouteRequestCurbsidesEnum string

const (
	RouteRequestCurbsidesEnumAny   RouteRequestCurbsidesEnum = "any"
	RouteRequestCurbsidesEnumRight RouteRequestCurbsidesEnum = "right"
	RouteRequestCurbsidesEnumLeft  RouteRequestCurbsidesEnum = "left"
)

type RouteRequest struct {
	Algorithm                       *RouteRequestAlgorithmEnum  `json:"algorithm"`
	AlternativeRouteMaxPaths        *int32                      `json:"alternative_route.max_paths"`
	AlternativeRouteMaxShareFactor  *float64                    `json:"alternative_route.max_share_factor"`
	AlternativeRouteMaxWeightFactor *float64                    `json:"alternative_route.max_weight_factor"`
	Avoid                           *string                     `json:"avoid"`
	BlockArea                       *string                     `json:"block_area"`
	CalcPoints                      *bool                       `json:"calc_points"`
	ChDisable                       *bool                       `json:"ch.disable"`
	Curbsides                       []RouteRequestCurbsidesEnum `json:"curbsides"`
	Debug                           *bool                       `json:"debug"`
	Details                         []string                    `json:"details"`
	Elevation                       *bool                       `json:"elevation"`
	HeadingPenalty                  *int32                      `json:"heading_penalty"`
	Headings                        []int32                     `json:"headings"`
	Instructions                    *bool                       `json:"instructions"`
	Locale                          *string                     `json:"locale"`
	Optimize                        *string                     `json:"optimize"`
	PassThrough                     *bool                       `json:"pass_through"`
	PointHints                      []string                    `json:"point_hints"`
	Points                          [][]float64                 `json:"points"`
	PointsEncoded                   *bool                       `json:"points_encoded"`
	RoundTripDistance               *int32                      `json:"round_trip.distance"`
	RoundTripSeed                   *int64                      `json:"round_trip.seed"`
	SnapPreventions                 []string                    `json:"snap_preventions"`
	Vehicle                         *VehicleProfileIDEnum       `json:"vehicle"`
	Weighting                       *string                     `json:"weighting"`
}
