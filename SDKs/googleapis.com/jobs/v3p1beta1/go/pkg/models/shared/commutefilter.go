package shared

type CommuteFilterCommuteMethodEnum string

const (
	CommuteFilterCommuteMethodEnumCommuteMethodUnspecified CommuteFilterCommuteMethodEnum = "COMMUTE_METHOD_UNSPECIFIED"
	CommuteFilterCommuteMethodEnumDriving                  CommuteFilterCommuteMethodEnum = "DRIVING"
	CommuteFilterCommuteMethodEnumTransit                  CommuteFilterCommuteMethodEnum = "TRANSIT"
	CommuteFilterCommuteMethodEnumWalking                  CommuteFilterCommuteMethodEnum = "WALKING"
	CommuteFilterCommuteMethodEnumCycling                  CommuteFilterCommuteMethodEnum = "CYCLING"
)

type CommuteFilterRoadTrafficEnum string

const (
	CommuteFilterRoadTrafficEnumRoadTrafficUnspecified CommuteFilterRoadTrafficEnum = "ROAD_TRAFFIC_UNSPECIFIED"
	CommuteFilterRoadTrafficEnumTrafficFree            CommuteFilterRoadTrafficEnum = "TRAFFIC_FREE"
	CommuteFilterRoadTrafficEnumBusyHour               CommuteFilterRoadTrafficEnum = "BUSY_HOUR"
)

type CommuteFilter struct {
	AllowImpreciseAddresses *bool                           `json:"allowImpreciseAddresses"`
	CommuteMethod           *CommuteFilterCommuteMethodEnum `json:"commuteMethod"`
	DepartureTime           *TimeOfDay                      `json:"departureTime"`
	RoadTraffic             *CommuteFilterRoadTrafficEnum   `json:"roadTraffic"`
	StartCoordinates        *LatLng                         `json:"startCoordinates"`
	TravelDuration          *string                         `json:"travelDuration"`
}
