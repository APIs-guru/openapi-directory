package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmComponentsIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmComponentsIDRequest struct {
	PathParams GetRealmComponentsIDPathParams
}

type GetRealmComponentsIDResponse struct {
	ComponentRepresentation *shared.ComponentRepresentation
	ContentType             string
	StatusCode              int64
}
