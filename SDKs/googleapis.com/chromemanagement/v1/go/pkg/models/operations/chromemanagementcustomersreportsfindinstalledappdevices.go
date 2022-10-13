package operations

import (
	"openapi/pkg/models/shared"
)

type ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams struct {
	Customer string `pathParam:"style=simple,explode=false,name=customer"`
}

type ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum string

const (
	ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnumAppTypeUnspecified ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum = "APP_TYPE_UNSPECIFIED"
	ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnumExtension          ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum = "EXTENSION"
	ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnumApp                ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum = "APP"
	ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnumTheme              ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum = "THEME"
	ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnumHostedApp          ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum = "HOSTED_APP"
	ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnumAndroidApp         ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum = "ANDROID_APP"
)

type ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                     `queryParam:"style=form,explode=true,name=alt"`
	AppID          *string                                                             `queryParam:"style=form,explode=true,name=appId"`
	AppType        *ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum `queryParam:"style=form,explode=true,name=appType"`
	Callback       *string                                                             `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                             `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                                                             `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                                                             `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string                                                             `queryParam:"style=form,explode=true,name=orderBy"`
	OrgUnitID      *string                                                             `queryParam:"style=form,explode=true,name=orgUnitId"`
	PageSize       *int64                                                              `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                             `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChromemanagementCustomersReportsFindInstalledAppDevicesRequest struct {
	PathParams  ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams
	QueryParams ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams
	Security    ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity
}

type ChromemanagementCustomersReportsFindInstalledAppDevicesResponse struct {
	ContentType                                             string
	GoogleChromeManagementV1FindInstalledAppDevicesResponse *shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse
	StatusCode                                              int64
}
