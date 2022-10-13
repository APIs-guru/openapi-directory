package operations

import (
	"openapi/pkg/models/shared"
)

type PubsubProjectsSchemasGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PubsubProjectsSchemasGetViewEnum string

const (
	PubsubProjectsSchemasGetViewEnumSchemaViewUnspecified PubsubProjectsSchemasGetViewEnum = "SCHEMA_VIEW_UNSPECIFIED"
	PubsubProjectsSchemasGetViewEnumBasic                 PubsubProjectsSchemasGetViewEnum = "BASIC"
	PubsubProjectsSchemasGetViewEnumFull                  PubsubProjectsSchemasGetViewEnum = "FULL"
)

type PubsubProjectsSchemasGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                           `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *PubsubProjectsSchemasGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type PubsubProjectsSchemasGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSchemasGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSchemasGetSecurity struct {
	Option1 *PubsubProjectsSchemasGetSecurityOption1 `security:"option"`
	Option2 *PubsubProjectsSchemasGetSecurityOption2 `security:"option"`
}

type PubsubProjectsSchemasGetRequest struct {
	PathParams  PubsubProjectsSchemasGetPathParams
	QueryParams PubsubProjectsSchemasGetQueryParams
	Security    PubsubProjectsSchemasGetSecurity
}

type PubsubProjectsSchemasGetResponse struct {
	ContentType string
	Schema      *shared.Schema
	StatusCode  int64
}
