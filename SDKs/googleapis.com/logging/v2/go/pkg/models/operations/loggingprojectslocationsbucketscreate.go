package operations

import (
	"openapi/pkg/models/shared"
)

type LoggingProjectsLocationsBucketsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type LoggingProjectsLocationsBucketsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	BucketID       *string           `queryParam:"style=form,explode=true,name=bucketId"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type LoggingProjectsLocationsBucketsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsLocationsBucketsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LoggingProjectsLocationsBucketsCreateSecurity struct {
	Option1 *LoggingProjectsLocationsBucketsCreateSecurityOption1 `security:"option"`
	Option2 *LoggingProjectsLocationsBucketsCreateSecurityOption2 `security:"option"`
}

type LoggingProjectsLocationsBucketsCreateRequest struct {
	PathParams  LoggingProjectsLocationsBucketsCreatePathParams
	QueryParams LoggingProjectsLocationsBucketsCreateQueryParams
	Request     *shared.LogBucketInput `request:"mediaType=application/json"`
	Security    LoggingProjectsLocationsBucketsCreateSecurity
}

type LoggingProjectsLocationsBucketsCreateResponse struct {
	ContentType string
	LogBucket   *shared.LogBucket
	StatusCode  int64
}
