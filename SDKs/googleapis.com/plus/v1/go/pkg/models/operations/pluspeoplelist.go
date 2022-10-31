package operations

import (
	"openapi/pkg/models/shared"
)

type PlusPeopleListCollectionEnum string

const (
	PlusPeopleListCollectionEnumConnected PlusPeopleListCollectionEnum = "connected"
	PlusPeopleListCollectionEnumVisible   PlusPeopleListCollectionEnum = "visible"
)

type PlusPeopleListPathParams struct {
	Collection PlusPeopleListCollectionEnum `pathParam:"style=simple,explode=false,name=collection"`
	UserID     string                       `pathParam:"style=simple,explode=false,name=userId"`
}

type PlusPeopleListOrderByEnum string

const (
	PlusPeopleListOrderByEnumAlphabetical PlusPeopleListOrderByEnum = "alphabetical"
	PlusPeopleListOrderByEnumBest         PlusPeopleListOrderByEnum = "best"
)

type PlusPeopleListQueryParams struct {
	Alt         *shared.AltEnum            `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string                    `queryParam:"style=form,explode=true,name=fields"`
	Key         *string                    `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64                     `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string                    `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy     *PlusPeopleListOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken   *string                    `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string                    `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string                    `queryParam:"style=form,explode=true,name=userIp"`
}

type PlusPeopleListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PlusPeopleListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PlusPeopleListSecurity struct {
	Option1 *PlusPeopleListSecurityOption1 `security:"option"`
	Option2 *PlusPeopleListSecurityOption2 `security:"option"`
}

type PlusPeopleListRequest struct {
	PathParams  PlusPeopleListPathParams
	QueryParams PlusPeopleListQueryParams
	Security    PlusPeopleListSecurity
}

type PlusPeopleListResponse struct {
	ContentType string
	PeopleFeed  *shared.PeopleFeed
	StatusCode  int64
}
