package operations



type PostCustomGatewayRefundOwnershipIDPathParams struct {
    OwnershipID string `pathParam:"style=simple,explode=false,name=ownershipId"`
    
}

type PostCustomGatewayRefundOwnershipIDQueryParams struct {
    Amount int64 `queryParam:"style=form,explode=true,name=amount"`
    CustomData *string `queryParam:"style=form,explode=true,name=customData"`
    Date *int64 `queryParam:"style=form,explode=true,name=date"`
    DeveloperAmount *int64 `queryParam:"style=form,explode=true,name=developerAmount"`
    FeeAmount *int64 `queryParam:"style=form,explode=true,name=feeAmount"`
    MarketplaceAmount *int64 `queryParam:"style=form,explode=true,name=marketplaceAmount"`
    
}

type PostCustomGatewayRefundOwnershipIDRequest struct {
    PathParams PostCustomGatewayRefundOwnershipIDPathParams 
    QueryParams PostCustomGatewayRefundOwnershipIDQueryParams 
    
}

type PostCustomGatewayRefundOwnershipIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

