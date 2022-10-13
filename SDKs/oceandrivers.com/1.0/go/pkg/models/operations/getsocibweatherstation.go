package operations

type GetSocibWeatherStationPathParams struct {
	Period      string `pathParam:"style=simple,explode=false,name=period"`
	StationName string `pathParam:"style=simple,explode=false,name=stationName"`
}

type GetSocibWeatherStationRequest struct {
	PathParams GetSocibWeatherStationPathParams
}

type GetSocibWeatherStationResponse struct {
	ContentType string
	StatusCode  int64
}
