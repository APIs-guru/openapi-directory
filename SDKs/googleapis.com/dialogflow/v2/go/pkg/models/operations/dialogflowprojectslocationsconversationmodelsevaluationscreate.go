package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams struct {
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

type DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest struct {
	PathParams  DialogflowProjectsLocationsConversationModelsEvaluationsCreatePathParams
	QueryParams DialogflowProjectsLocationsConversationModelsEvaluationsCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity
}

type DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
