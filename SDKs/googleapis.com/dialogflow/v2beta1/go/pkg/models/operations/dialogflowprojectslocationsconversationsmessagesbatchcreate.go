package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams struct {
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

type DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest struct {
	PathParams  DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams
	QueryParams DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity
}

type DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse struct {
	ContentType                                             string
	GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse *shared.GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse
	StatusCode                                              int64
}
