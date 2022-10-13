package operations

import (
	"openapi/pkg/models/shared"
)

type PlusPeopleListByActivityCollectionEnum string

const (
	PlusPeopleListByActivityCollectionEnumPlusoners PlusPeopleListByActivityCollectionEnum = "plusoners"
	PlusPeopleListByActivityCollectionEnumResharers PlusPeopleListByActivityCollectionEnum = "resharers"
)

type PlusPeopleListByActivityPathParams struct {
	ActivityID string                                 `pathParam:"style=simple,explode=false,name=activityId"`
	Collection PlusPeopleListByActivityCollectionEnum `pathParam:"style=simple,explode=false,name=collection"`
}

type PlusPeopleListByActivityQueryParams struct {
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

type PlusPeopleListByActivitySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PlusPeopleListByActivitySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PlusPeopleListByActivitySecurity struct {
	Option1 *PlusPeopleListByActivitySecurityOption1 `security:"option"`
	Option2 *PlusPeopleListByActivitySecurityOption2 `security:"option"`
}

type PlusPeopleListByActivityRequest struct {
	PathParams  PlusPeopleListByActivityPathParams
	QueryParams PlusPeopleListByActivityQueryParams
	Security    PlusPeopleListByActivitySecurity
}

type PlusPeopleListByActivityResponse struct {
	ContentType string
	PeopleFeed  *shared.PeopleFeed
	StatusCode  int64
}
