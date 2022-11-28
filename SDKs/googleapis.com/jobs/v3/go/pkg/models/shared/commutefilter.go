package shared

type CommuteFilterCommuteMethodEnum string

const (
	CommuteFilterCommuteMethodEnumCommuteMethodUnspecified CommuteFilterCommuteMethodEnum = "COMMUTE_METHOD_UNSPECIFIED"
	CommuteFilterCommuteMethodEnumDriving                  CommuteFilterCommuteMethodEnum = "DRIVING"
	CommuteFilterCommuteMethodEnumTransit                  CommuteFilterCommuteMethodEnum = "TRANSIT"
)

type CommuteFilterRoadTrafficEnum string

const (
	CommuteFilterRoadTrafficEnumRoadTrafficUnspecified CommuteFilterRoadTrafficEnum = "ROAD_TRAFFIC_UNSPECIFIED"
	CommuteFilterRoadTrafficEnumTrafficFree            CommuteFilterRoadTrafficEnum = "TRAFFIC_FREE"
	CommuteFilterRoadTrafficEnumBusyHour               CommuteFilterRoadTrafficEnum = "BUSY_HOUR"
)

// CommuteFilter
// Input only. Parameters needed for commute search.
type CommuteFilter struct {
	AllowImpreciseAddresses *bool                           `json:"allowImpreciseAddresses,omitempty"`
	CommuteMethod           *CommuteFilterCommuteMethodEnum `json:"commuteMethod,omitempty"`
	DepartureTime           *TimeOfDay                      `json:"departureTime,omitempty"`
	RoadTraffic             *CommuteFilterRoadTrafficEnum   `json:"roadTraffic,omitempty"`
	StartCoordinates        *LatLng                         `json:"startCoordinates,omitempty"`
	TravelDuration          *string                         `json:"travelDuration,omitempty"`
}
