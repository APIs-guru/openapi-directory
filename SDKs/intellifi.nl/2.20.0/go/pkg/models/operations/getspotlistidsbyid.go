package operations



type GetSpotListIdsByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSpotListIdsByIDRequest struct {
    PathParams GetSpotListIdsByIDPathParams 
    
}

type GetSpotListIdsByIDResponse struct {
    ContentType string 
    ListOfItemIds []string 
    StatusCode int64 
    
}

