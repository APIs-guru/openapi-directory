package operations

import (
	"openapi/pkg/models/shared"
)

type StorageObjectAccessControlsUpdatePathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
	Entity string `pathParam:"style=simple,explode=false,name=entity"`
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type StorageObjectAccessControlsUpdateQueryParams struct {
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

type StorageObjectAccessControlsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectAccessControlsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectAccessControlsUpdateSecurity struct {
	Option1 *StorageObjectAccessControlsUpdateSecurityOption1 `security:"option"`
	Option2 *StorageObjectAccessControlsUpdateSecurityOption2 `security:"option"`
}

type StorageObjectAccessControlsUpdateRequest struct {
	PathParams  StorageObjectAccessControlsUpdatePathParams
	QueryParams StorageObjectAccessControlsUpdateQueryParams
	Request     *shared.ObjectAccessControl `request:"mediaType=application/json"`
	Security    StorageObjectAccessControlsUpdateSecurity
}

type StorageObjectAccessControlsUpdateResponse struct {
	ContentType         string
	ObjectAccessControl *shared.ObjectAccessControl
	StatusCode          int64
}
