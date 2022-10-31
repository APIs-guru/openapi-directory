package operations

import (
	"openapi/pkg/models/shared"
)

type GetRequestIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetRequestIDQueryParams struct {
	Withfullhistory *string `queryParam:"style=form,explode=true,name=withfullhistory"`
	Withhistory     *string `queryParam:"style=form,explode=true,name=withhistory"`
}

type GetRequestIDSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetRequestIDRequest struct {
	PathParams  GetRequestIDPathParams
	QueryParams GetRequestIDQueryParams
	Security    GetRequestIDSecurity
}

type GetRequestIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
