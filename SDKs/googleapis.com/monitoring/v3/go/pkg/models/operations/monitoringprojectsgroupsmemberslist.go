package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsGroupsMembersListPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsGroupsMembersListQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter            *string           `queryParam:"style=form,explode=true,name=filter"`
	IntervalEndTime   *string           `queryParam:"style=form,explode=true,name=interval.endTime"`
	IntervalStartTime *string           `queryParam:"style=form,explode=true,name=interval.startTime"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize          *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken         *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type MonitoringProjectsGroupsMembersListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsGroupsMembersListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsGroupsMembersListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsGroupsMembersListSecurity struct {
	Option1 *MonitoringProjectsGroupsMembersListSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsGroupsMembersListSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsGroupsMembersListSecurityOption3 `security:"option"`
}

type MonitoringProjectsGroupsMembersListRequest struct {
	PathParams  MonitoringProjectsGroupsMembersListPathParams
	QueryParams MonitoringProjectsGroupsMembersListQueryParams
	Security    MonitoringProjectsGroupsMembersListSecurity
}

type MonitoringProjectsGroupsMembersListResponse struct {
	ContentType              string
	ListGroupMembersResponse *shared.ListGroupMembersResponse
	StatusCode               int64
}
