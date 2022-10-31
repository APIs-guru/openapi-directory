package operations

import (
	"openapi/pkg/models/shared"
)

type StorageDefaultObjectAccessControlsUpdatePathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
	Entity string `pathParam:"style=simple,explode=false,name=entity"`
}

type StorageDefaultObjectAccessControlsUpdateQueryParams struct {
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

type StorageDefaultObjectAccessControlsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageDefaultObjectAccessControlsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageDefaultObjectAccessControlsUpdateSecurity struct {
	Option1 *StorageDefaultObjectAccessControlsUpdateSecurityOption1 `security:"option"`
	Option2 *StorageDefaultObjectAccessControlsUpdateSecurityOption2 `security:"option"`
}

type StorageDefaultObjectAccessControlsUpdateRequest struct {
	PathParams  StorageDefaultObjectAccessControlsUpdatePathParams
	QueryParams StorageDefaultObjectAccessControlsUpdateQueryParams
	Request     *shared.ObjectAccessControl `request:"mediaType=application/json"`
	Security    StorageDefaultObjectAccessControlsUpdateSecurity
}

type StorageDefaultObjectAccessControlsUpdateResponse struct {
	ContentType         string
	ObjectAccessControl *shared.ObjectAccessControl
	StatusCode          int64
}
