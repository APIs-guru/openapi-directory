package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsConversationsParticipantsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsConversationsParticipantsCreateQueryParams struct {
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

type DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsParticipantsCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsConversationsParticipantsCreateRequest struct {
	PathParams  DialogflowProjectsLocationsConversationsParticipantsCreatePathParams
	QueryParams DialogflowProjectsLocationsConversationsParticipantsCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2Participant `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsConversationsParticipantsCreateSecurity
}

type DialogflowProjectsLocationsConversationsParticipantsCreateResponse struct {
	ContentType                        string
	GoogleCloudDialogflowV2Participant *shared.GoogleCloudDialogflowV2Participant
	StatusCode                         int64
}
