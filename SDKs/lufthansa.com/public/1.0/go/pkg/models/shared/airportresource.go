package shared

type AirportResourceAirports struct {
	Airport *Airport `json:"Airport,omitempty"`
}

type AirportResourceMeta struct {
	AtVersion  *string `json:"@Version,omitempty"`
	Link       []Link  `json:"Link,omitempty"`
	TotalCount *int32  `json:"TotalCount,omitempty"`
}

type AirportResource struct {
	Airports *AirportResourceAirports `json:"Airports,omitempty"`
	Meta     *AirportResourceMeta     `json:"Meta,omitempty"`
}
