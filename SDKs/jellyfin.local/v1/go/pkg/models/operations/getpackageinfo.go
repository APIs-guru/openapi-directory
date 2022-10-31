package operations

import (
	"openapi/pkg/models/shared"
)

type GetPackageInfoPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetPackageInfoQueryParams struct {
	AssemblyGUID *string `queryParam:"style=form,explode=true,name=assemblyGuid"`
}

type GetPackageInfoSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetPackageInfoRequest struct {
	PathParams  GetPackageInfoPathParams
	QueryParams GetPackageInfoQueryParams
	Security    GetPackageInfoSecurity
}

type GetPackageInfoResponse struct {
	ContentType string
	PackageInfo *shared.PackageInfo
	StatusCode  int64
}
