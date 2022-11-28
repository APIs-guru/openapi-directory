package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCmsV3DomainsGetPageQueryParams struct {
	After         *string    `queryParam:"style=form,explode=true,name=after"`
	Archived      *bool      `queryParam:"style=form,explode=true,name=archived"`
	CreatedAfter  *time.Time `queryParam:"style=form,explode=true,name=createdAfter"`
	CreatedAt     *time.Time `queryParam:"style=form,explode=true,name=createdAt"`
	CreatedBefore *time.Time `queryParam:"style=form,explode=true,name=createdBefore"`
	Limit         *int32     `queryParam:"style=form,explode=true,name=limit"`
	Sort          []string   `queryParam:"style=form,explode=true,name=sort"`
	UpdatedAfter  *time.Time `queryParam:"style=form,explode=true,name=updatedAfter"`
	UpdatedAt     *time.Time `queryParam:"style=form,explode=true,name=updatedAt"`
	UpdatedBefore *time.Time `queryParam:"style=form,explode=true,name=updatedBefore"`
}

type GetCmsV3DomainsGetPageSecurity struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetCmsV3DomainsGetPageRequest struct {
	QueryParams GetCmsV3DomainsGetPageQueryParams
	Security    GetCmsV3DomainsGetPageSecurity
}

type GetCmsV3DomainsGetPageResponse struct {
	Body                                           []byte
	CollectionResponseWithTotalDomainForwardPaging *shared.CollectionResponseWithTotalDomainForwardPaging
	ContentType                                    string
	StatusCode                                     int64
}
