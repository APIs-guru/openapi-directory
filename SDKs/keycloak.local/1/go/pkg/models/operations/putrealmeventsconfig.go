package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmEventsConfigPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmEventsConfigRequest struct {
	PathParams PutRealmEventsConfigPathParams
	Request    shared.RealmEventsConfigRepresentation `request:"mediaType=application/json"`
}

type PutRealmEventsConfigResponse struct {
	ContentType string
	StatusCode  int64
}
