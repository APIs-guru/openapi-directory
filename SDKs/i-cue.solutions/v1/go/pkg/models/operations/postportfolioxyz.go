package operations

import (
"openapi/pkg/models/shared")

type PostPortfolioXyzHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostPortfolioXyzRequests struct {
    PortfolioRequest *shared.PortfolioRequest `request:"mediaType=application/*+json"`
    PortfolioRequest1 *shared.PortfolioRequest `request:"mediaType=application/json"`
    PortfolioRequest2 *shared.PortfolioRequest `request:"mediaType=text/json"`
    
}

type PostPortfolioXyzRequest struct {
    Headers PostPortfolioXyzHeaders 
    Request *PostPortfolioXyzRequests 
    
}

type PostPortfolioXyzResponse struct {
    Body []byte 
    ContentType string 
    PortfolioXyzModels []shared.PortfolioXyzModel 
    StatusCode int64 
    
}

