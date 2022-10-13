package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmAdminEventsPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmAdminEventsQueryParams struct {
	AuthClient     *string  `queryParam:"style=form,explode=true,name=authClient"`
	AuthIPAddress  *string  `queryParam:"style=form,explode=true,name=authIpAddress"`
	AuthRealm      *string  `queryParam:"style=form,explode=true,name=authRealm"`
	AuthUser       *string  `queryParam:"style=form,explode=true,name=authUser"`
	DateFrom       *string  `queryParam:"style=form,explode=true,name=dateFrom"`
	DateTo         *string  `queryParam:"style=form,explode=true,name=dateTo"`
	First          *int32   `queryParam:"style=form,explode=true,name=first"`
	Max            *int32   `queryParam:"style=form,explode=true,name=max"`
	OperationTypes []string `queryParam:"style=form,explode=true,name=operationTypes"`
	ResourcePath   *string  `queryParam:"style=form,explode=true,name=resourcePath"`
	ResourceTypes  []string `queryParam:"style=form,explode=true,name=resourceTypes"`
}

type GetRealmAdminEventsRequest struct {
	PathParams  GetRealmAdminEventsPathParams
	QueryParams GetRealmAdminEventsQueryParams
}

type GetRealmAdminEventsResponse struct {
	AdminEventRepresentations []shared.AdminEventRepresentation
	ContentType               string
	StatusCode                int64
}
