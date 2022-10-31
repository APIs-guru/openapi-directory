package operations

import (
"openapi/pkg/models/shared")

type GetCmsV3DomainsGetPageQueryParams struct {
    After *string `queryParam:"style=form,explode=true,name=after"`
    Archived *bool `queryParam:"style=form,explode=true,name=archived"`
    Before *string `queryParam:"style=form,explode=true,name=before"`
    CreatedAfter *int64 `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedAt *int64 `queryParam:"style=form,explode=true,name=createdAt"`
    CreatedBefore *int64 `queryParam:"style=form,explode=true,name=createdBefore"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Properties []string `queryParam:"style=form,explode=true,name=properties"`
    Sort []string `queryParam:"style=form,explode=true,name=sort"`
    UpdatedAfter *int64 `queryParam:"style=form,explode=true,name=updatedAfter"`
    UpdatedAt *int64 `queryParam:"style=form,explode=true,name=updatedAt"`
    UpdatedBefore *int64 `queryParam:"style=form,explode=true,name=updatedBefore"`
    
}

type GetCmsV3DomainsGetPageSecurity struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetCmsV3DomainsGetPageRequest struct {
    QueryParams GetCmsV3DomainsGetPageQueryParams 
    Security GetCmsV3DomainsGetPageSecurity 
    
}

type GetCmsV3DomainsGetPageResponse struct {
    Body []byte 
    CollectionResponseWithTotalDomain *shared.CollectionResponseWithTotalDomain 
    ContentType string 
    StatusCode int64 
    
}

