package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDUserSessionsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDUserSessionsQueryParams struct {
	First *int32 `queryParam:"style=form,explode=true,name=first"`
	Max   *int32 `queryParam:"style=form,explode=true,name=max"`
}

type GetRealmClientsIDUserSessionsRequest struct {
	PathParams  GetRealmClientsIDUserSessionsPathParams
	QueryParams GetRealmClientsIDUserSessionsQueryParams
}

type GetRealmClientsIDUserSessionsResponse struct {
	ContentType                string
	StatusCode                 int64
	UserSessionRepresentations []shared.UserSessionRepresentation
}
