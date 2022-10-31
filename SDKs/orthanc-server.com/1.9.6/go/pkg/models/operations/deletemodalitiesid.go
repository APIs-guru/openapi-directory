package operations



type DeleteModalitiesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteModalitiesIDRequest struct {
    PathParams DeleteModalitiesIDPathParams 
    
}

type DeleteModalitiesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

