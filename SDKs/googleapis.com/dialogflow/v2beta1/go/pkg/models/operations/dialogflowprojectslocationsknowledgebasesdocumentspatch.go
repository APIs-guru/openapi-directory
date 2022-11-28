package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum string

const (
	DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnumIntentViewUnspecified DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum = "INTENT_VIEW_UNSPECIFIED"
	DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnumIntentViewFull        DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum = "INTENT_VIEW_FULL"
)

type DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                      `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                        `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                                `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string                                                                `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken     *string                                                                `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                                  `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string                                                                `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity struct {
	Option1 *DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest struct {
	PathParams  DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchPathParams
	QueryParams DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchQueryParams
	Request     *shared.GoogleCloudDialogflowV2beta1DocumentInput `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
