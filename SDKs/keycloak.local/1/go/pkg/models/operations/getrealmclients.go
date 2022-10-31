package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsQueryParams struct {
	ClientID     *string `queryParam:"style=form,explode=true,name=clientId"`
	First        *int32  `queryParam:"style=form,explode=true,name=first"`
	Max          *int32  `queryParam:"style=form,explode=true,name=max"`
	Search       *bool   `queryParam:"style=form,explode=true,name=search"`
	ViewableOnly *bool   `queryParam:"style=form,explode=true,name=viewableOnly"`
}

type GetRealmClientsRequest struct {
	PathParams  GetRealmClientsPathParams
	QueryParams GetRealmClientsQueryParams
}

type GetRealmClientsResponse struct {
	ClientRepresentations []shared.ClientRepresentation
	ContentType           string
	StatusCode            int64
}
