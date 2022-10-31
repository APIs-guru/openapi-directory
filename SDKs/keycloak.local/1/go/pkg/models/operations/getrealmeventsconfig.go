package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmEventsConfigPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmEventsConfigRequest struct {
	PathParams GetRealmEventsConfigPathParams
}

type GetRealmEventsConfigResponse struct {
	ContentType                     string
	RealmEventsConfigRepresentation *shared.RealmEventsConfigRepresentation
	StatusCode                      int64
}
