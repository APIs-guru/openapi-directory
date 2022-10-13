package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsKnowledgeBasesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams struct {
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

type DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsKnowledgeBasesCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsKnowledgeBasesCreateRequest struct {
	PathParams  DialogflowProjectsLocationsKnowledgeBasesCreatePathParams
	QueryParams DialogflowProjectsLocationsKnowledgeBasesCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2beta1KnowledgeBase `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsKnowledgeBasesCreateSecurity
}

type DialogflowProjectsLocationsKnowledgeBasesCreateResponse struct {
	ContentType                               string
	GoogleCloudDialogflowV2beta1KnowledgeBase *shared.GoogleCloudDialogflowV2beta1KnowledgeBase
	StatusCode                                int64
}
