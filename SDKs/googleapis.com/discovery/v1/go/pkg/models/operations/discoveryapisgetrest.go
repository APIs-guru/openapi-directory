package operations

import (
"openapi/pkg/models/shared")

type DiscoveryApisGetRestPathParams struct {
    API string `pathParam:"style=simple,explode=false,name=api"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type DiscoveryApisGetRestQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DiscoveryApisGetRestRequest struct {
    PathParams DiscoveryApisGetRestPathParams 
    QueryParams DiscoveryApisGetRestQueryParams 
    
}

type DiscoveryApisGetRestResponse struct {
    ContentType string 
    RestDescription *shared.RestDescription 
    StatusCode int64 
    
}

