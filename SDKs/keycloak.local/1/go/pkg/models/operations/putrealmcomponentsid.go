package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmComponentsIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmComponentsIDRequest struct {
	PathParams PutRealmComponentsIDPathParams
	Request    shared.ComponentRepresentation `request:"mediaType=application/json"`
}

type PutRealmComponentsIDResponse struct {
	ContentType string
	StatusCode  int64
}
