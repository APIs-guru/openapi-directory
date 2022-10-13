package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmTestLdapConnectionPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmTestLdapConnectionRequest struct {
	PathParams PostRealmTestLdapConnectionPathParams
	Request    shared.TestLdapConnectionRepresentation `request:"mediaType=application/json"`
}

type PostRealmTestLdapConnectionResponse struct {
	ContentType string
	StatusCode  int64
}
