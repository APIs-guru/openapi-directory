package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeMembersListModeEnum string

const (
	YoutubeMembersListModeEnumListMembersModeUnknown YoutubeMembersListModeEnum = "listMembersModeUnknown"
	YoutubeMembersListModeEnumUpdates                YoutubeMembersListModeEnum = "updates"
	YoutubeMembersListModeEnumAllCurrent             YoutubeMembersListModeEnum = "all_current"
)

type YoutubeMembersListQueryParams struct {
	DollarXgafv             *shared.XgafvEnum           `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken             *string                     `queryParam:"style=form,explode=true,name=access_token"`
	Alt                     *shared.AltEnum             `queryParam:"style=form,explode=true,name=alt"`
	Callback                *string                     `queryParam:"style=form,explode=true,name=callback"`
	Fields                  *string                     `queryParam:"style=form,explode=true,name=fields"`
	FilterByMemberChannelID *string                     `queryParam:"style=form,explode=true,name=filterByMemberChannelId"`
	HasAccessToLevel        *string                     `queryParam:"style=form,explode=true,name=hasAccessToLevel"`
	Key                     *string                     `queryParam:"style=form,explode=true,name=key"`
	MaxResults              *int64                      `queryParam:"style=form,explode=true,name=maxResults"`
	Mode                    *YoutubeMembersListModeEnum `queryParam:"style=form,explode=true,name=mode"`
	OauthToken              *string                     `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken               *string                     `queryParam:"style=form,explode=true,name=pageToken"`
	Part                    []string                    `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint             *bool                       `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser               *string                     `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType              *string                     `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol          *string                     `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeMembersListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeMembersListRequest struct {
	QueryParams YoutubeMembersListQueryParams
	Security    YoutubeMembersListSecurity
}

type YoutubeMembersListResponse struct {
	ContentType        string
	MemberListResponse *shared.MemberListResponse
	StatusCode         int64
}
