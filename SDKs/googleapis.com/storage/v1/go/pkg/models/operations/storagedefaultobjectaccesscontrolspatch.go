package operations

import (
	"openapi/pkg/models/shared"
)

type StorageDefaultObjectAccessControlsPatchPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
	Entity string `pathParam:"style=simple,explode=false,name=entity"`
}

type StorageDefaultObjectAccessControlsPatchQueryParams struct {
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

type StorageDefaultObjectAccessControlsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageDefaultObjectAccessControlsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageDefaultObjectAccessControlsPatchSecurity struct {
	Option1 *StorageDefaultObjectAccessControlsPatchSecurityOption1 `security:"option"`
	Option2 *StorageDefaultObjectAccessControlsPatchSecurityOption2 `security:"option"`
}

type StorageDefaultObjectAccessControlsPatchRequest struct {
	PathParams  StorageDefaultObjectAccessControlsPatchPathParams
	QueryParams StorageDefaultObjectAccessControlsPatchQueryParams
	Request     *shared.ObjectAccessControl `request:"mediaType=application/json"`
	Security    StorageDefaultObjectAccessControlsPatchSecurity
}

type StorageDefaultObjectAccessControlsPatchResponse struct {
	ContentType         string
	ObjectAccessControl *shared.ObjectAccessControl
	StatusCode          int64
}
