package operations

import (
	"openapi/pkg/models/shared"
)

type PostPersonLoginPathParams struct {
	Login string `pathParam:"style=simple,explode=false,name=login"`
}

type PostPersonLoginCmdEnum string

const (
	PostPersonLoginCmdEnumChangePassword PostPersonLoginCmdEnum = "change_password"
	PostPersonLoginCmdEnumLock           PostPersonLoginCmdEnum = "lock"
	PostPersonLoginCmdEnumDelete         PostPersonLoginCmdEnum = "delete"
)

type PostPersonLoginQueryParams struct {
	Cmd PostPersonLoginCmdEnum `queryParam:"style=form,explode=true,name=cmd"`
}

type PostPersonLoginSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PostPersonLoginRequest struct {
	PathParams  PostPersonLoginPathParams
	QueryParams PostPersonLoginQueryParams
	Request     []byte `request:"mediaType=text/plain"`
	Security    PostPersonLoginSecurity
}

type PostPersonLoginResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
