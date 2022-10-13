package operations

import (
	"openapi/pkg/models/shared"
)

type DiscoveryApisListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	Name        *string         `queryParam:"style=form,explode=true,name=name"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	Preferred   *bool           `queryParam:"style=form,explode=true,name=preferred"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DiscoveryApisListRequest struct {
	QueryParams DiscoveryApisListQueryParams
}

type DiscoveryApisListResponse struct {
	ContentType   string
	DirectoryList *shared.DirectoryList
	StatusCode    int64
}
