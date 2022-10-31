package operations



type PostPricingPriceElasticityOfDemandHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostPricingPriceElasticityOfDemandRequest struct {
    Headers PostPricingPriceElasticityOfDemandHeaders 
    
}

type PostPricingPriceElasticityOfDemandResponse struct {
    ContentType string 
    StatusCode int64 
    
}

