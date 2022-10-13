package operations

import (
	"openapi/pkg/models/shared"
)

type StorageDefaultObjectAccessControlsListPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageDefaultObjectAccessControlsListQueryParams struct {
	Alt                      *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields                   *string         `queryParam:"style=form,explode=true,name=fields"`
	IfMetagenerationMatch    *string         `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
	IfMetagenerationNotMatch *string         `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
	Key                      *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken               *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint              *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType               *string         `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP                   *string         `queryParam:"style=form,explode=true,name=userIp"`
	UserProject              *string         `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageDefaultObjectAccessControlsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageDefaultObjectAccessControlsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageDefaultObjectAccessControlsListSecurity struct {
	Option1 *StorageDefaultObjectAccessControlsListSecurityOption1 `security:"option"`
	Option2 *StorageDefaultObjectAccessControlsListSecurityOption2 `security:"option"`
}

type StorageDefaultObjectAccessControlsListRequest struct {
	PathParams  StorageDefaultObjectAccessControlsListPathParams
	QueryParams StorageDefaultObjectAccessControlsListQueryParams
	Security    StorageDefaultObjectAccessControlsListSecurity
}

type StorageDefaultObjectAccessControlsListResponse struct {
	ContentType          string
	ObjectAccessControls *shared.ObjectAccessControls
	StatusCode           int64
}
