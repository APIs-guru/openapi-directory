package operations

import (
	"openapi/pkg/models/shared"
)

type GetPackagesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetPackagesRequest struct {
	Security GetPackagesSecurity
}

type GetPackagesResponse struct {
	ContentType  string
	PackageInfos []shared.PackageInfo
	StatusCode   int64
}
