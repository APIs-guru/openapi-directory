package operations

import (
	"openapi/pkg/models/shared"
)

type StorageObjectsGetPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type StorageObjectsGetProjectionEnum string

const (
	StorageObjectsGetProjectionEnumFull  StorageObjectsGetProjectionEnum = "full"
	StorageObjectsGetProjectionEnumNoACL StorageObjectsGetProjectionEnum = "noAcl"
)

type StorageObjectsGetQueryParams struct {
	Alt                      *shared.AltEnum                  `queryParam:"style=form,explode=true,name=alt"`
	Fields                   *string                          `queryParam:"style=form,explode=true,name=fields"`
	Generation               *string                          `queryParam:"style=form,explode=true,name=generation"`
	IfGenerationMatch        *string                          `queryParam:"style=form,explode=true,name=ifGenerationMatch"`
	IfGenerationNotMatch     *string                          `queryParam:"style=form,explode=true,name=ifGenerationNotMatch"`
	IfMetagenerationMatch    *string                          `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
	IfMetagenerationNotMatch *string                          `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
	Key                      *string                          `queryParam:"style=form,explode=true,name=key"`
	OauthToken               *string                          `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint              *bool                            `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection               *StorageObjectsGetProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser                *string                          `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType               *string                          `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP                   *string                          `queryParam:"style=form,explode=true,name=userIp"`
	UserProject              *string                          `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageObjectsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsGetSecurity struct {
	Option1 *StorageObjectsGetSecurityOption1 `security:"option"`
	Option2 *StorageObjectsGetSecurityOption2 `security:"option"`
	Option3 *StorageObjectsGetSecurityOption3 `security:"option"`
	Option4 *StorageObjectsGetSecurityOption4 `security:"option"`
	Option5 *StorageObjectsGetSecurityOption5 `security:"option"`
}

type StorageObjectsGetRequest struct {
	PathParams  StorageObjectsGetPathParams
	QueryParams StorageObjectsGetQueryParams
	Security    StorageObjectsGetSecurity
}

type StorageObjectsGetResponse struct {
	ContentType string
	Object      *shared.Object
	StatusCode  int64
}
