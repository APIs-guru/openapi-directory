package operations



type PostInventoryReorderPointHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostInventoryReorderPointRequest struct {
    Headers PostInventoryReorderPointHeaders 
    
}

type PostInventoryReorderPointResponse struct {
    ContentType string 
    StatusCode int64 
    
}

