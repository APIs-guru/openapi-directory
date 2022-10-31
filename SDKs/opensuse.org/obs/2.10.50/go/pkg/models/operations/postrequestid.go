package operations

import (
	"openapi/pkg/models/shared"
)

type PostRequestIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostRequestIDQueryParams struct {
	ByGroup   *string `queryParam:"style=form,explode=true,name=by_group"`
	ByPackage *string `queryParam:"style=form,explode=true,name=by_package"`
	ByProject *string `queryParam:"style=form,explode=true,name=by_project"`
	ByUser    *string `queryParam:"style=form,explode=true,name=by_user"`
	Cmd       *string `queryParam:"style=form,explode=false,name=cmd"`
	Comment   *string `queryParam:"style=form,explode=true,name=comment"`
	Incident  *string `queryParam:"style=form,explode=true,name=incident"`
	Newstate  *string `queryParam:"style=form,explode=true,name=newstate"`
	Priority  *string `queryParam:"style=form,explode=true,name=priority"`
	Time      *string `queryParam:"style=form,explode=true,name=time"`
}

type PostRequestIDSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PostRequestIDRequest struct {
	PathParams  PostRequestIDPathParams
	QueryParams PostRequestIDQueryParams
	Security    PostRequestIDSecurity
}

type PostRequestIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
