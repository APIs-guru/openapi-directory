package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuildProjectNameResultPathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=project_name"`
}

type GetBuildProjectNameResultViewEnum string

const (
	GetBuildProjectNameResultViewEnumSummary    GetBuildProjectNameResultViewEnum = "summary"
	GetBuildProjectNameResultViewEnumStatus     GetBuildProjectNameResultViewEnum = "status"
	GetBuildProjectNameResultViewEnumBinarylist GetBuildProjectNameResultViewEnum = "binarylist"
)

type GetBuildProjectNameResultQueryParams struct {
	Arch       *string                            `queryParam:"style=form,explode=true,name=arch"`
	Lastbuild  *bool                              `queryParam:"style=form,explode=true,name=lastbuild"`
	Locallink  *bool                              `queryParam:"style=form,explode=true,name=locallink"`
	Multibuild *bool                              `queryParam:"style=form,explode=true,name=multibuild"`
	Package    *string                            `queryParam:"style=form,explode=true,name=package"`
	Repository *string                            `queryParam:"style=form,explode=true,name=repository"`
	View       *GetBuildProjectNameResultViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetBuildProjectNameResultSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetBuildProjectNameResultRequest struct {
	PathParams  GetBuildProjectNameResultPathParams
	QueryParams GetBuildProjectNameResultQueryParams
	Security    GetBuildProjectNameResultSecurity
}

type GetBuildProjectNameResultResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
