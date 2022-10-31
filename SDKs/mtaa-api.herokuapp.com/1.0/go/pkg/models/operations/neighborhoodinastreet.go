package operations



type NeighborhoodInAStreetPathParams struct {
    Country string `pathParam:"style=simple,explode=false,name=country"`
    District string `pathParam:"style=simple,explode=false,name=district"`
    Region string `pathParam:"style=simple,explode=false,name=region"`
    Street string `pathParam:"style=simple,explode=false,name=street"`
    Ward string `pathParam:"style=simple,explode=false,name=ward"`
    
}

type NeighborhoodInAStreetRequest struct {
    PathParams NeighborhoodInAStreetPathParams 
    
}

type NeighborhoodInAStreetResponse struct {
    ContentType string 
    StatusCode int64 
    
}

