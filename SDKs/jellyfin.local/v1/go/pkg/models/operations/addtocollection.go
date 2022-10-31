package operations

import (
	"openapi/pkg/models/shared"
)

type AddToCollectionPathParams struct {
	CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
}

type AddToCollectionQueryParams struct {
	Ids []string `queryParam:"style=form,explode=true,name=ids"`
}

type AddToCollectionSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type AddToCollectionRequest struct {
	PathParams  AddToCollectionPathParams
	QueryParams AddToCollectionQueryParams
	Security    AddToCollectionSecurity
}

type AddToCollectionResponse struct {
	ContentType string
	StatusCode  int64
}
