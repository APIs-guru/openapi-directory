package operations

type GetAemetStationPathParams struct {
	Period      string `pathParam:"style=simple,explode=false,name=period"`
	StationName string `pathParam:"style=simple,explode=false,name=stationName"`
}

type GetAemetStationRequest struct {
	PathParams GetAemetStationPathParams
}

type GetAemetStationResponse struct {
	ContentType string
	StatusCode  int64
}
