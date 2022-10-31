package operations

import (
"openapi/pkg/models/shared")

type AddListingProviderQueryParams struct {
    Pw *string `queryParam:"style=form,explode=true,name=pw"`
    ValidateListings *bool `queryParam:"style=form,explode=true,name=validateListings"`
    ValidateLogin *bool `queryParam:"style=form,explode=true,name=validateLogin"`
    
}

type AddListingProviderRequests struct {
    ListingsProviderInfo *shared.ListingsProviderInfo `request:"mediaType=application/*+json"`
    ListingsProviderInfo1 *shared.ListingsProviderInfo `request:"mediaType=application/json"`
    ListingsProviderInfo2 *shared.ListingsProviderInfo `request:"mediaType=text/json"`
    
}

type AddListingProviderSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddListingProviderRequest struct {
    QueryParams AddListingProviderQueryParams 
    Request *AddListingProviderRequests 
    Security AddListingProviderSecurity 
    
}

type AddListingProviderResponse struct {
    ContentType string 
    ListingsProviderInfo *shared.ListingsProviderInfo 
    StatusCode int64 
    
}

