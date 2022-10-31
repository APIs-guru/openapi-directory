package operations

import (
	"openapi/pkg/models/shared"
)

type ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams struct {
	Customer string `pathParam:"style=simple,explode=false,name=customer"`
}

type ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxAueDate     *string           `queryParam:"style=form,explode=true,name=maxAueDate"`
	MinAueDate     *string           `queryParam:"style=form,explode=true,name=minAueDate"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrgUnitID      *string           `queryParam:"style=form,explode=true,name=orgUnitId"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest struct {
	PathParams  ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams
	QueryParams ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams
	Security    ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity
}

type ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse struct {
	ContentType                                                                  string
	GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse *shared.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse
	StatusCode                                                                   int64
}
