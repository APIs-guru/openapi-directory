package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsTestCasesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentsTestCasesListViewEnum string

const (
	DialogflowProjectsLocationsAgentsTestCasesListViewEnumTestCaseViewUnspecified DialogflowProjectsLocationsAgentsTestCasesListViewEnum = "TEST_CASE_VIEW_UNSPECIFIED"
	DialogflowProjectsLocationsAgentsTestCasesListViewEnumBasic                   DialogflowProjectsLocationsAgentsTestCasesListViewEnum = "BASIC"
	DialogflowProjectsLocationsAgentsTestCasesListViewEnumFull                    DialogflowProjectsLocationsAgentsTestCasesListViewEnum = "FULL"
)

type DialogflowProjectsLocationsAgentsTestCasesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                       `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                 `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                         `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                 `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                 `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                 `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                 `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                                  `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                 `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                   `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                 `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                 `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                 `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *DialogflowProjectsLocationsAgentsTestCasesListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type DialogflowProjectsLocationsAgentsTestCasesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsTestCasesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsTestCasesListSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsTestCasesListSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsTestCasesListSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsTestCasesListRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsTestCasesListPathParams
	QueryParams DialogflowProjectsLocationsAgentsTestCasesListQueryParams
	Security    DialogflowProjectsLocationsAgentsTestCasesListSecurity
}

type DialogflowProjectsLocationsAgentsTestCasesListResponse struct {
	ContentType                                         string
	GoogleCloudDialogflowCxV3beta1ListTestCasesResponse *shared.GoogleCloudDialogflowCxV3beta1ListTestCasesResponse
	StatusCode                                          int64
}
