package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarACLWatchPathParams struct {
	CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
}

type CalendarACLWatchQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowDeleted *bool           `queryParam:"style=form,explode=true,name=showDeleted"`
	SyncToken   *string         `queryParam:"style=form,explode=true,name=syncToken"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarACLWatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarACLWatchRequest struct {
	PathParams  CalendarACLWatchPathParams
	QueryParams CalendarACLWatchQueryParams
	Request     *shared.Channel `request:"mediaType=application/json"`
	Security    CalendarACLWatchSecurity
}

type CalendarACLWatchResponse struct {
	Channel     *shared.Channel
	ContentType string
	StatusCode  int64
}
