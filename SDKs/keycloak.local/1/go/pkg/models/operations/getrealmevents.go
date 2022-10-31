package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmEventsPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmEventsQueryParams struct {
	Client    *string  `queryParam:"style=form,explode=true,name=client"`
	DateFrom  *string  `queryParam:"style=form,explode=true,name=dateFrom"`
	DateTo    *string  `queryParam:"style=form,explode=true,name=dateTo"`
	First     *int32   `queryParam:"style=form,explode=true,name=first"`
	IPAddress *string  `queryParam:"style=form,explode=true,name=ipAddress"`
	Max       *int32   `queryParam:"style=form,explode=true,name=max"`
	Type      []string `queryParam:"style=form,explode=true,name=type"`
	User      *string  `queryParam:"style=form,explode=true,name=user"`
}

type GetRealmEventsRequest struct {
	PathParams  GetRealmEventsPathParams
	QueryParams GetRealmEventsQueryParams
}

type GetRealmEventsResponse struct {
	ContentType          string
	EventRepresentations []shared.EventRepresentation
	StatusCode           int64
}
