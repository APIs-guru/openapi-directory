package operations

import (
	"openapi/pkg/models/shared"
)

type PubsubProjectsSchemasValidateMessagePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type PubsubProjectsSchemasValidateMessageQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PubsubProjectsSchemasValidateMessageSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSchemasValidateMessageSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsSchemasValidateMessageSecurity struct {
	Option1 *PubsubProjectsSchemasValidateMessageSecurityOption1 `security:"option"`
	Option2 *PubsubProjectsSchemasValidateMessageSecurityOption2 `security:"option"`
}

type PubsubProjectsSchemasValidateMessageRequest struct {
	PathParams  PubsubProjectsSchemasValidateMessagePathParams
	QueryParams PubsubProjectsSchemasValidateMessageQueryParams
	Request     *shared.ValidateMessageRequestInput `request:"mediaType=application/json"`
	Security    PubsubProjectsSchemasValidateMessageSecurity
}

type PubsubProjectsSchemasValidateMessageResponse struct {
	ContentType             string
	StatusCode              int64
	ValidateMessageResponse map[string]interface{}
}
