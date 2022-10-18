package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmClientsIDCertificatesAttrDownloadPathParams struct {
	Attr  string `pathParam:"style=simple,explode=false,name=attr"`
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClientsIDCertificatesAttrDownloadRequest struct {
	PathParams PostRealmClientsIDCertificatesAttrDownloadPathParams
	Request    shared.KeyStoreConfig `request:"mediaType=application/json"`
}

type PostRealmClientsIDCertificatesAttrDownloadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
