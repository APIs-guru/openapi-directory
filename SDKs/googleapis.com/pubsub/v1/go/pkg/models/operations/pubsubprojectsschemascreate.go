package operations

import (
	"openapi/pkg/models/shared"
)

type PubsubProjectsSchemasCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type PubsubProjectsSchemasCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	SchemaID       *string           `queryParam:"style=form,explode=true,name=schemaId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PubsubProjectsSchemasCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSchemasCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSchemasCreateSecurity struct {
	Option1 *PubsubProjectsSchemasCreateSecurityOption1 `security:"option"`
	Option2 *PubsubProjectsSchemasCreateSecurityOption2 `security:"option"`
}

type PubsubProjectsSchemasCreateRequest struct {
	PathParams  PubsubProjectsSchemasCreatePathParams
	QueryParams PubsubProjectsSchemasCreateQueryParams
	Request     *shared.SchemaInput `request:"mediaType=application/json"`
	Security    PubsubProjectsSchemasCreateSecurity
}

type PubsubProjectsSchemasCreateResponse struct {
	ContentType string
	Schema      *shared.Schema
	StatusCode  int64
}
