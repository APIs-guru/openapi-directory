package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveFromCollectionPathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
}

type RemoveFromCollectionQueryParams struct {
	Ids []string `queryParam:"style=form,explode=true,name=ids"`
}

type RemoveFromCollectionSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type RemoveFromCollectionRequest struct {
	PathParams  RemoveFromCollectionPathParams
	QueryParams RemoveFromCollectionQueryParams
	Security    RemoveFromCollectionSecurity
}

type RemoveFromCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
