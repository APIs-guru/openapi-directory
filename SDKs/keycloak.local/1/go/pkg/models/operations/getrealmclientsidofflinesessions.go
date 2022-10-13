package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDOfflineSessionsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDOfflineSessionsQueryParams struct {
	First *int32 `queryParam:"style=form,explode=true,name=first"`
	Max   *int32 `queryParam:"style=form,explode=true,name=max"`
}

type GetRealmClientsIDOfflineSessionsRequest struct {
	PathParams  GetRealmClientsIDOfflineSessionsPathParams
	QueryParams GetRealmClientsIDOfflineSessionsQueryParams
}

type GetRealmClientsIDOfflineSessionsResponse struct {
	ContentType                string
	StatusCode                 int64
	UserSessionRepresentations []shared.UserSessionRepresentation
}
