package operations

import (
	"openapi/pkg/models/shared"
)

type PlusActivitiesListCollectionEnum string

const (
	PlusActivitiesListCollectionEnumPublic PlusActivitiesListCollectionEnum = "public"
)

type PlusActivitiesListPathParams struct {
	Collection PlusActivitiesListCollectionEnum `pathParam:"style=simple,explode=false,name=collection"`
	UserID     string                           `pathParam:"style=simple,explode=false,name=userId"`
}

type PlusActivitiesListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type PlusActivitiesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PlusActivitiesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PlusActivitiesListSecurity struct {
	Option1 *PlusActivitiesListSecurityOption1 `security:"option"`
	Option2 *PlusActivitiesListSecurityOption2 `security:"option"`
}

type PlusActivitiesListRequest struct {
	PathParams  PlusActivitiesListPathParams
	QueryParams PlusActivitiesListQueryParams
	Security    PlusActivitiesListSecurity
}

type PlusActivitiesListResponse struct {
	ActivityFeed *shared.ActivityFeed
	ContentType  string
	StatusCode   int64
}
