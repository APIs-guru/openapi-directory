package operations

import (
	"openapi/pkg/models/shared"
)

type StorageObjectAccessControlsListPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type StorageObjectAccessControlsListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Generation  *string         `queryParam:"style=form,explode=true,name=generation"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType  *string         `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
	UserProject *string         `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageObjectAccessControlsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectAccessControlsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectAccessControlsListSecurity struct {
	Option1 *StorageObjectAccessControlsListSecurityOption1 `security:"option"`
	Option2 *StorageObjectAccessControlsListSecurityOption2 `security:"option"`
}

type StorageObjectAccessControlsListRequest struct {
	PathParams  StorageObjectAccessControlsListPathParams
	QueryParams StorageObjectAccessControlsListQueryParams
	Security    StorageObjectAccessControlsListSecurity
}

type StorageObjectAccessControlsListResponse struct {
	ContentType          string
	ObjectAccessControls *shared.ObjectAccessControls
	StatusCode           int64
}
