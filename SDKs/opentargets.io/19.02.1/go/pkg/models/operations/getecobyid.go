package operations



type GetEcObyIDPathParams struct {
    EcoID string `pathParam:"style=simple,explode=false,name=ECO_ID"`
    
}

type GetEcObyIDRequest struct {
    PathParams GetEcObyIDPathParams 
    
}

type GetEcObyIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

