package shared

// AirportResourceAirports
// Container for airport elements.
type AirportResourceAirports struct {
	Airport *Airport `json:"Airport,omitempty"`
}

// AirportResourceMeta
// Container for meta links.
type AirportResourceMeta struct {
	AtVersion  *string `json:"@Version,omitempty"`
	Link       []Link  `json:"Link,omitempty"`
	TotalCount *int32  `json:"TotalCount,omitempty"`
}

// AirportResource
// Root element of airport response.
type AirportResource struct {
	Airports *AirportResourceAirports `json:"Airports,omitempty"`
	Meta     *AirportResourceMeta     `json:"Meta,omitempty"`
}
