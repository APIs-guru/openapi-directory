package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsKnowledgeBasesDocumentsImportPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsImportQueryParams struct {
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

type DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity struct {
	Option1 *DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest struct {
	PathParams  DialogflowProjectsLocationsKnowledgeBasesDocumentsImportPathParams
	QueryParams DialogflowProjectsLocationsKnowledgeBasesDocumentsImportQueryParams
	Request     *shared.GoogleCloudDialogflowV2beta1ImportDocumentsRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
