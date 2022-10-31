package operations



type PostPricingPenetrationPricingHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostPricingPenetrationPricingRequest struct {
    Headers PostPricingPenetrationPricingHeaders 
    
}

type PostPricingPenetrationPricingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

