package operations

import (
	"openapi/pkg/models/shared"
)

type FullExportSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type FullExportRequest struct {
	Security FullExportSecurity
}

type FullExportResponse struct {
	ContentType  string
	ImportExport *shared.ImportExport
	StatusCode   int64
}
