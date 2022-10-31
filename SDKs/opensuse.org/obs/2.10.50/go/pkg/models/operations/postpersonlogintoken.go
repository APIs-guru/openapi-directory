package operations

import (
	"openapi/pkg/models/shared"
)

type PostPersonLoginTokenPathParams struct {
	Login string `pathParam:"style=simple,explode=false,name=login"`
}

type PostPersonLoginTokenOperationEnum string

const (
	PostPersonLoginTokenOperationEnumRunservice PostPersonLoginTokenOperationEnum = "runservice"
	PostPersonLoginTokenOperationEnumRebuild    PostPersonLoginTokenOperationEnum = "rebuild"
	PostPersonLoginTokenOperationEnumRelease    PostPersonLoginTokenOperationEnum = "release"
)

type PostPersonLoginTokenQueryParams struct {
	Operation *PostPersonLoginTokenOperationEnum `queryParam:"style=form,explode=true,name=operation"`
	Package   *string                            `queryParam:"style=form,explode=true,name=package"`
	Project   *string                            `queryParam:"style=form,explode=true,name=project"`
	ScmToken  *string                            `queryParam:"style=form,explode=true,name=scm_token"`
}

type PostPersonLoginTokenSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PostPersonLoginTokenRequest struct {
	PathParams  PostPersonLoginTokenPathParams
	QueryParams PostPersonLoginTokenQueryParams
	Security    PostPersonLoginTokenSecurity
}

type PostPersonLoginTokenResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
