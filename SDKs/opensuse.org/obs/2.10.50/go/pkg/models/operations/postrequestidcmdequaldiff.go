package operations

import (
	"openapi/pkg/models/shared"
)

type PostRequestIDCmdEqualDiffPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostRequestIDCmdEqualDiffViewEnum string

const (
	PostRequestIDCmdEqualDiffViewEnumXML PostRequestIDCmdEqualDiffViewEnum = "xml"
)

type PostRequestIDCmdEqualDiffWithissuesEnum string

const (
	PostRequestIDCmdEqualDiffWithissuesEnumTrue PostRequestIDCmdEqualDiffWithissuesEnum = "true"
	PostRequestIDCmdEqualDiffWithissuesEnumOne  PostRequestIDCmdEqualDiffWithissuesEnum = "1"
)

type PostRequestIDCmdEqualDiffQueryParams struct {
	DiffToSuperseded *string                                  `queryParam:"style=form,explode=true,name=diff_to_superseded"`
	View             *PostRequestIDCmdEqualDiffViewEnum       `queryParam:"style=form,explode=true,name=view"`
	Withissues       *PostRequestIDCmdEqualDiffWithissuesEnum `queryParam:"style=form,explode=true,name=withissues"`
}

type PostRequestIDCmdEqualDiffSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PostRequestIDCmdEqualDiffRequest struct {
	PathParams  PostRequestIDCmdEqualDiffPathParams
	QueryParams PostRequestIDCmdEqualDiffQueryParams
	Security    PostRequestIDCmdEqualDiffSecurity
}

type PostRequestIDCmdEqualDiffResponse struct {
	Body                                        []byte
	ContentType                                 string
	PostRequestIDCmdEqualDiff200TextPlainString *string
	StatusCode                                  int64
}
