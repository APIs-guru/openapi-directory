package operations



type PostInventoryFillRateHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostInventoryFillRateRequest struct {
    Headers PostInventoryFillRateHeaders 
    
}

type PostInventoryFillRateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

