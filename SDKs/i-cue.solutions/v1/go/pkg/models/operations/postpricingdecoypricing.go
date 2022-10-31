package operations



type PostPricingDecoyPricingHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostPricingDecoyPricingRequest struct {
    Headers PostPricingDecoyPricingHeaders 
    
}

type PostPricingDecoyPricingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

