package operations

import (
	"openapi/pkg/models/shared"
)

type ChatSpacesMessagesUpdatePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ChatSpacesMessagesUpdateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	AllowMissing   *bool             `queryParam:"style=form,explode=true,name=allowMissing"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ChatSpacesMessagesUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChatSpacesMessagesUpdateRequest struct {
	PathParams  ChatSpacesMessagesUpdatePathParams
	QueryParams ChatSpacesMessagesUpdateQueryParams
	Request     *shared.MessageInput `request:"mediaType=application/json"`
	Security    ChatSpacesMessagesUpdateSecurity
}

type ChatSpacesMessagesUpdateResponse struct {
	ContentType string
	Message     *shared.Message
	StatusCode  int64
}
