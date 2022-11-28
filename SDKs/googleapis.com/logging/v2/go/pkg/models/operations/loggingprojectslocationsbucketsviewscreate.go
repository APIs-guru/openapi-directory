package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingProjectsLocationsBucketsViewsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type LoggingProjectsLocationsBucketsViewsCreateQueryParams struct {
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
	ViewID         *string           `queryParam:"style=form,explode=true,name=viewId"`
}

type LoggingProjectsLocationsBucketsViewsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsLocationsBucketsViewsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsLocationsBucketsViewsCreateSecurity struct {
	Option1 *LoggingProjectsLocationsBucketsViewsCreateSecurityOption1 `security:"option"`
	Option2 *LoggingProjectsLocationsBucketsViewsCreateSecurityOption2 `security:"option"`
}

type LoggingProjectsLocationsBucketsViewsCreateRequest struct {
	PathParams  LoggingProjectsLocationsBucketsViewsCreatePathParams
	QueryParams LoggingProjectsLocationsBucketsViewsCreateQueryParams
	Request     *shared.LogViewInput `request:"mediaType=application/json"`
	Security    LoggingProjectsLocationsBucketsViewsCreateSecurity
}

type LoggingProjectsLocationsBucketsViewsCreateResponse struct {
	ContentType string
	LogView     *shared.LogView
	StatusCode  int64
}
