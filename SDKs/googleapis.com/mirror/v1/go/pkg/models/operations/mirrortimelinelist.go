package operations

import (
	"openapi/pkg/models/shared"
)

type MirrorTimelineListOrderByEnum string

const (
	MirrorTimelineListOrderByEnumDisplayTime MirrorTimelineListOrderByEnum = "displayTime"
	MirrorTimelineListOrderByEnumWriteTime   MirrorTimelineListOrderByEnum = "writeTime"
)

type MirrorTimelineListQueryParams struct {
	Alt            *shared.AltEnum                `queryParam:"style=form,explode=true,name=alt"`
	BundleID       *string                        `queryParam:"style=form,explode=true,name=bundleId"`
	Fields         *string                        `queryParam:"style=form,explode=true,name=fields"`
	IncludeDeleted *bool                          `queryParam:"style=form,explode=true,name=includeDeleted"`
	Key            *string                        `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                         `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                        `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *MirrorTimelineListOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken      *string                        `queryParam:"style=form,explode=true,name=pageToken"`
	PinnedOnly     *bool                          `queryParam:"style=form,explode=true,name=pinnedOnly"`
	PrettyPrint    *bool                          `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                        `queryParam:"style=form,explode=true,name=quotaUser"`
	SourceItemID   *string                        `queryParam:"style=form,explode=true,name=sourceItemId"`
	UserIP         *string                        `queryParam:"style=form,explode=true,name=userIp"`
}

type MirrorTimelineListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorTimelineListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorTimelineListSecurity struct {
	Option1 *MirrorTimelineListSecurityOption1 `security:"option"`
	Option2 *MirrorTimelineListSecurityOption2 `security:"option"`
}

type MirrorTimelineListRequest struct {
	QueryParams MirrorTimelineListQueryParams
	Security    MirrorTimelineListSecurity
}

type MirrorTimelineListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
