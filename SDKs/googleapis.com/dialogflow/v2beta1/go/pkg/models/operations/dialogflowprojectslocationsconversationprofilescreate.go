package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsConversationProfilesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsConversationProfilesCreateQueryParams struct {
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

type DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationProfilesCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsConversationProfilesCreateRequest struct {
	PathParams  DialogflowProjectsLocationsConversationProfilesCreatePathParams
	QueryParams DialogflowProjectsLocationsConversationProfilesCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2beta1ConversationProfileInput `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsConversationProfilesCreateSecurity
}

type DialogflowProjectsLocationsConversationProfilesCreateResponse struct {
	ContentType                                     string
	GoogleCloudDialogflowV2beta1ConversationProfile *shared.GoogleCloudDialogflowV2beta1ConversationProfile
	StatusCode                                      int64
}
