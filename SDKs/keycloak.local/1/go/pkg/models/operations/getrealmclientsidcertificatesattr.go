package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDCertificatesAttrPathParams struct {
	Attr  string `pathParam:"style=simple,explode=false,name=attr"`
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDCertificatesAttrRequest struct {
	PathParams GetRealmClientsIDCertificatesAttrPathParams
}

type GetRealmClientsIDCertificatesAttrResponse struct {
	CertificateRepresentation *shared.CertificateRepresentation
	ContentType               string
	StatusCode                int64
}
