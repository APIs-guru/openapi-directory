package operations



type CompareStationPathParams struct {
    StationName string `pathParam:"style=simple,explode=false,name=stationName"`
    
}

type CompareStationRequest struct {
    PathParams CompareStationPathParams 
    
}

type CompareStationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

