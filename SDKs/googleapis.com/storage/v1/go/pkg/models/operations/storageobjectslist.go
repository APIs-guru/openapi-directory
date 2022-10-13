package operations

import (
	"openapi/pkg/models/shared"
)

type StorageObjectsListPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageObjectsListProjectionEnum string

const (
	StorageObjectsListProjectionEnumFull  StorageObjectsListProjectionEnum = "full"
	StorageObjectsListProjectionEnumNoACL StorageObjectsListProjectionEnum = "noAcl"
)

type StorageObjectsListQueryParams struct {
	Alt                      *shared.AltEnum                   `queryParam:"style=form,explode=true,name=alt"`
	Delimiter                *string                           `queryParam:"style=form,explode=true,name=delimiter"`
	EndOffset                *string                           `queryParam:"style=form,explode=true,name=endOffset"`
	Fields                   *string                           `queryParam:"style=form,explode=true,name=fields"`
	IncludeTrailingDelimiter *bool                             `queryParam:"style=form,explode=true,name=includeTrailingDelimiter"`
	Key                      *string                           `queryParam:"style=form,explode=true,name=key"`
	MaxResults               *int64                            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken               *string                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken                *string                           `queryParam:"style=form,explode=true,name=pageToken"`
	Prefix                   *string                           `queryParam:"style=form,explode=true,name=prefix"`
	PrettyPrint              *bool                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection               *StorageObjectsListProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser                *string                           `queryParam:"style=form,explode=true,name=quotaUser"`
	StartOffset              *string                           `queryParam:"style=form,explode=true,name=startOffset"`
	UploadType               *string                           `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP                   *string                           `queryParam:"style=form,explode=true,name=userIp"`
	UserProject              *string                           `queryParam:"style=form,explode=true,name=userProject"`
	Versions                 *bool                             `queryParam:"style=form,explode=true,name=versions"`
}

type StorageObjectsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsListSecurity struct {
	Option1 *StorageObjectsListSecurityOption1 `security:"option"`
	Option2 *StorageObjectsListSecurityOption2 `security:"option"`
	Option3 *StorageObjectsListSecurityOption3 `security:"option"`
	Option4 *StorageObjectsListSecurityOption4 `security:"option"`
	Option5 *StorageObjectsListSecurityOption5 `security:"option"`
}

type StorageObjectsListRequest struct {
	PathParams  StorageObjectsListPathParams
	QueryParams StorageObjectsListQueryParams
	Security    StorageObjectsListSecurity
}

type StorageObjectsListResponse struct {
	ContentType string
	Objects     *shared.Objects
	StatusCode  int64
}
