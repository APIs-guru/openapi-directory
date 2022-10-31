package operations

import (
	"openapi/pkg/models/shared"
)

type ChromemanagementCustomersReportsCountInstalledAppsPathParams struct {
	Customer string `pathParam:"style=simple,explode=false,name=customer"`
}

type ChromemanagementCustomersReportsCountInstalledAppsQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string           `queryParam:"style=form,explode=true,name=orderBy"`
	OrgUnitID      *string           `queryParam:"style=form,explode=true,name=orgUnitId"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ChromemanagementCustomersReportsCountInstalledAppsSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChromemanagementCustomersReportsCountInstalledAppsRequest struct {
	PathParams  ChromemanagementCustomersReportsCountInstalledAppsPathParams
	QueryParams ChromemanagementCustomersReportsCountInstalledAppsQueryParams
	Security    ChromemanagementCustomersReportsCountInstalledAppsSecurity
}

type ChromemanagementCustomersReportsCountInstalledAppsResponse struct {
	ContentType                                        string
	GoogleChromeManagementV1CountInstalledAppsResponse *shared.GoogleChromeManagementV1CountInstalledAppsResponse
	StatusCode                                         int64
}
