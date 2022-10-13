package operations

import (
	"openapi/pkg/models/shared"
)

type StorageNotificationsGetPathParams struct {
	Bucket       string `pathParam:"style=simple,explode=false,name=bucket"`
	Notification string `pathParam:"style=simple,explode=false,name=notification"`
}

type StorageNotificationsGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType  *string         `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
	UserProject *string         `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageNotificationsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageNotificationsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageNotificationsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageNotificationsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageNotificationsGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageNotificationsGetSecurity struct {
	Option1 *StorageNotificationsGetSecurityOption1 `security:"option"`
	Option2 *StorageNotificationsGetSecurityOption2 `security:"option"`
	Option3 *StorageNotificationsGetSecurityOption3 `security:"option"`
	Option4 *StorageNotificationsGetSecurityOption4 `security:"option"`
	Option5 *StorageNotificationsGetSecurityOption5 `security:"option"`
}

type StorageNotificationsGetRequest struct {
	PathParams  StorageNotificationsGetPathParams
	QueryParams StorageNotificationsGetQueryParams
	Security    StorageNotificationsGetSecurity
}

type StorageNotificationsGetResponse struct {
	ContentType  string
	Notification *shared.Notification
	StatusCode   int64
}
