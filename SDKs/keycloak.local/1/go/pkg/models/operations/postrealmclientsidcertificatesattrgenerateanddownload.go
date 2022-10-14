package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmClientsIDCertificatesAttrGenerateAndDownloadPathParams struct {
	Attr  string `pathParam:"style=simple,explode=false,name=attr"`
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClientsIDCertificatesAttrGenerateAndDownloadRequest struct {
	PathParams PostRealmClientsIDCertificatesAttrGenerateAndDownloadPathParams
	Request    shared.KeyStoreConfig `request:"mediaType=application/json"`
}

type PostRealmClientsIDCertificatesAttrGenerateAndDownloadResponse struct {
	ContentType                                                                              string
	PostRealmClientsIDCertificatesAttrGenerateAndDownload2XxApplicationOctetStreamByteString *string
	StatusCode                                                                               int64
}
