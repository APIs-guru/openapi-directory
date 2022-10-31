package operations

import (
"openapi/pkg/models/shared")

type PostUsersUserEmailOfferingsPathParams struct {
    UserEmail string `pathParam:"style=simple,explode=false,name=userEmail"`
    
}

type PostUsersUserEmailOfferingsRequest struct {
    PathParams PostUsersUserEmailOfferingsPathParams 
    Request []string `request:"mediaType=application/json"`
    
}

type PostUsersUserEmailOfferingsResponse struct {
    ContentType string 
    Error *shared.Error 
    OfferingMetadataResponses []shared.OfferingMetadataResponse 
    StatusCode int64 
    
}

