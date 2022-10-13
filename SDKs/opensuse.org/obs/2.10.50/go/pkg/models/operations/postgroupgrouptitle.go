package operations

import (
	"openapi/pkg/models/shared"
)

type PostGroupGroupTitlePathParams struct {
	GroupTitle string `pathParam:"style=simple,explode=false,name=group_title"`
}

type PostGroupGroupTitleCmdEnum string

const (
	PostGroupGroupTitleCmdEnumAddUser    PostGroupGroupTitleCmdEnum = "add_user"
	PostGroupGroupTitleCmdEnumRemoveUser PostGroupGroupTitleCmdEnum = "remove_user"
	PostGroupGroupTitleCmdEnumSetEmail   PostGroupGroupTitleCmdEnum = "set_email"
)

type PostGroupGroupTitleQueryParams struct {
	Cmd    *PostGroupGroupTitleCmdEnum `queryParam:"style=form,explode=true,name=cmd"`
	Email  *string                     `queryParam:"style=form,explode=true,name=email"`
	Userid *string                     `queryParam:"style=form,explode=true,name=userid"`
}

type PostGroupGroupTitleSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PostGroupGroupTitleRequest struct {
	PathParams  PostGroupGroupTitlePathParams
	QueryParams PostGroupGroupTitleQueryParams
	Security    PostGroupGroupTitleSecurity
}

type PostGroupGroupTitleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
