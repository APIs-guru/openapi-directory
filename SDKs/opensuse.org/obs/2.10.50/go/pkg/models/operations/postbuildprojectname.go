package operations

import (
	"openapi/pkg/models/shared"
)

type PostBuildProjectNamePathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=project_name"`
}

type PostBuildProjectNameCmdEnum string

const (
	PostBuildProjectNameCmdEnumWipe         PostBuildProjectNameCmdEnum = "wipe"
	PostBuildProjectNameCmdEnumRestartbuild PostBuildProjectNameCmdEnum = "restartbuild"
	PostBuildProjectNameCmdEnumKillbuild    PostBuildProjectNameCmdEnum = "killbuild"
	PostBuildProjectNameCmdEnumAbortbuild   PostBuildProjectNameCmdEnum = "abortbuild"
	PostBuildProjectNameCmdEnumRebuild      PostBuildProjectNameCmdEnum = "rebuild"
	PostBuildProjectNameCmdEnumUnpublish    PostBuildProjectNameCmdEnum = "unpublish"
	PostBuildProjectNameCmdEnumSendsysrq    PostBuildProjectNameCmdEnum = "sendsysrq"
)

type PostBuildProjectNameQueryParams struct {
	Arch       *string                     `queryParam:"style=form,explode=true,name=arch"`
	Cmd        PostBuildProjectNameCmdEnum `queryParam:"style=form,explode=true,name=cmd"`
	Package    *string                     `queryParam:"style=form,explode=true,name=package"`
	Repository *string                     `queryParam:"style=form,explode=true,name=repository"`
}

type PostBuildProjectNameSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PostBuildProjectNameRequest struct {
	PathParams  PostBuildProjectNamePathParams
	QueryParams PostBuildProjectNameQueryParams
	Security    PostBuildProjectNameSecurity
}

type PostBuildProjectNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
