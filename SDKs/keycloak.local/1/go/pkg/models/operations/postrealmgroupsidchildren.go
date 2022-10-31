package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmGroupsIDChildrenPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmGroupsIDChildrenRequest struct {
	PathParams PostRealmGroupsIDChildrenPathParams
	Request    shared.GroupRepresentation `request:"mediaType=application/json"`
}

type PostRealmGroupsIDChildrenResponse struct {
	ContentType string
	StatusCode  int64
}
