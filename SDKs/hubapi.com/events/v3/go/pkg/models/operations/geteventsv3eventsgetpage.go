package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEventsV3EventsGetPageQueryParams struct {
	After          *string    `queryParam:"style=form,explode=true,name=after"`
	Before         *string    `queryParam:"style=form,explode=true,name=before"`
	EventType      *string    `queryParam:"style=form,explode=true,name=eventType"`
	Limit          *int32     `queryParam:"style=form,explode=true,name=limit"`
	ObjectID       *int64     `queryParam:"style=form,explode=true,name=objectId"`
	ObjectType     *string    `queryParam:"style=form,explode=true,name=objectType"`
	OccurredAfter  *time.Time `queryParam:"style=form,explode=true,name=occurredAfter"`
	OccurredBefore *time.Time `queryParam:"style=form,explode=true,name=occurredBefore"`
	Sort           []string   `queryParam:"style=form,explode=true,name=sort"`
}

type GetEventsV3EventsGetPageSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetEventsV3EventsGetPageSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetEventsV3EventsGetPageSecurity struct {
	Option1 *GetEventsV3EventsGetPageSecurityOption1 `security:"option"`
	Option2 *GetEventsV3EventsGetPageSecurityOption2 `security:"option"`
}

type GetEventsV3EventsGetPageRequest struct {
	QueryParams GetEventsV3EventsGetPageQueryParams
	Security    GetEventsV3EventsGetPageSecurity
}

type GetEventsV3EventsGetPageResponse struct {
	Body                                   []byte
	CollectionResponseExternalUnifiedEvent *shared.CollectionResponseExternalUnifiedEvent
	ContentType                            string
	StatusCode                             int64
}
