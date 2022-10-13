package operations

import (
	"openapi/pkg/models/shared"
)

type MirrorContactsInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type MirrorContactsInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorContactsInsertRequest struct {
	QueryParams MirrorContactsInsertQueryParams
	Request     *shared.Contact `request:"mediaType=application/json"`
	Security    MirrorContactsInsertSecurity
}

type MirrorContactsInsertResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
