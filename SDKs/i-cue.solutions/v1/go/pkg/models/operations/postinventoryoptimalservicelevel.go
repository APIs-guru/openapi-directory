package operations



type PostInventoryOptimalServiceLevelHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostInventoryOptimalServiceLevelRequest struct {
    Headers PostInventoryOptimalServiceLevelHeaders 
    
}

type PostInventoryOptimalServiceLevelResponse struct {
    ContentType string 
    StatusCode int64 
    
}

