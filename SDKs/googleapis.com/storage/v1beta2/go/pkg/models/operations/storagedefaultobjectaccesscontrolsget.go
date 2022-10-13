package operations

import (
	"openapi/pkg/models/shared"
)

type StorageDefaultObjectAccessControlsGetPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
	Entity string `pathParam:"style=simple,explode=false,name=entity"`
}

type StorageDefaultObjectAccessControlsGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type StorageDefaultObjectAccessControlsGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageDefaultObjectAccessControlsGetRequest struct {
	PathParams  StorageDefaultObjectAccessControlsGetPathParams
	QueryParams StorageDefaultObjectAccessControlsGetQueryParams
	Security    StorageDefaultObjectAccessControlsGetSecurity
}

type StorageDefaultObjectAccessControlsGetResponse struct {
	ContentType         string
	ObjectAccessControl *shared.ObjectAccessControl
	StatusCode          int64
}
