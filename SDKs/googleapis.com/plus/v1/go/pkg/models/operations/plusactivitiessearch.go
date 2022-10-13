package operations

import (
	"openapi/pkg/models/shared"
)

type PlusActivitiesSearchOrderByEnum string

const (
	PlusActivitiesSearchOrderByEnumBest   PlusActivitiesSearchOrderByEnum = "best"
	PlusActivitiesSearchOrderByEnumRecent PlusActivitiesSearchOrderByEnum = "recent"
)

type PlusActivitiesSearchQueryParams struct {
	Alt         *shared.AltEnum                  `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string                          `queryParam:"style=form,explode=true,name=fields"`
	Key         *string                          `queryParam:"style=form,explode=true,name=key"`
	Language    *string                          `queryParam:"style=form,explode=true,name=language"`
	MaxResults  *int64                           `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string                          `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy     *PlusActivitiesSearchOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken   *string                          `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool                            `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query       string                           `queryParam:"style=form,explode=true,name=query"`
	QuotaUser   *string                          `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string                          `queryParam:"style=form,explode=true,name=userIp"`
}

type PlusActivitiesSearchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PlusActivitiesSearchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PlusActivitiesSearchSecurity struct {
	Option1 *PlusActivitiesSearchSecurityOption1 `security:"option"`
	Option2 *PlusActivitiesSearchSecurityOption2 `security:"option"`
}

type PlusActivitiesSearchRequest struct {
	QueryParams PlusActivitiesSearchQueryParams
	Security    PlusActivitiesSearchSecurity
}

type PlusActivitiesSearchResponse struct {
	ActivityFeed *shared.ActivityFeed
	ContentType  string
	StatusCode   int64
}
