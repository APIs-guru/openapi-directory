package operations



type DeletePersonLoginTokenIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Login string `pathParam:"style=simple,explode=false,name=login"`
    
}

type DeletePersonLoginTokenIDRequest struct {
    PathParams DeletePersonLoginTokenIDPathParams 
    
}

type DeletePersonLoginTokenIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

