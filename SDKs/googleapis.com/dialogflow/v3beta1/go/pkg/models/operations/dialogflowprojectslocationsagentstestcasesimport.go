package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsTestCasesImportPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentsTestCasesImportQueryParams struct {
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

type DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsTestCasesImportSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsTestCasesImportRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsTestCasesImportPathParams
	QueryParams DialogflowProjectsLocationsAgentsTestCasesImportQueryParams
	Request     *shared.GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentsTestCasesImportSecurity
}

type DialogflowProjectsLocationsAgentsTestCasesImportResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
