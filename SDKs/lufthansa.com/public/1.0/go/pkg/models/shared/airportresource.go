package shared

type AirportResourceAirports struct {
	Airport *Airport `json:"Airport"`
}

type AirportResourceMeta struct {
	AtVersion  *string `json:"@Version"`
	Link       []Link  `json:"Link"`
	TotalCount *int32  `json:"TotalCount"`
}

type AirportResource struct {
	Airports *AirportResourceAirports `json:"Airports"`
	Meta     *AirportResourceMeta     `json:"Meta"`
}
