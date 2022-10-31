package operations



type GetWeatherDisplayPathParams struct {
    StationName string `pathParam:"style=simple,explode=false,name=stationName"`
    
}

type GetWeatherDisplayQueryParams struct {
    Period string `queryParam:"style=form,explode=true,name=period"`
    
}

type GetWeatherDisplayRequest struct {
    PathParams GetWeatherDisplayPathParams 
    QueryParams GetWeatherDisplayQueryParams 
    
}

type GetWeatherDisplayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

