package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsGroupsListPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringProjectsGroupsListQueryParams struct {
	DollarXgafv        *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	AncestorsOfGroup   *string           `queryParam:"style=form,explode=true,name=ancestorsOfGroup"`
	Callback           *string           `queryParam:"style=form,explode=true,name=callback"`
	ChildrenOfGroup    *string           `queryParam:"style=form,explode=true,name=childrenOfGroup"`
	DescendantsOfGroup *string           `queryParam:"style=form,explode=true,name=descendantsOfGroup"`
	Fields             *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken         *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize           *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken          *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint        *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType         *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type MonitoringProjectsGroupsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsGroupsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsGroupsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsGroupsListSecurity struct {
	Option1 *MonitoringProjectsGroupsListSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsGroupsListSecurityOption2 `security:"option"`
	Option3 *MonitoringProjectsGroupsListSecurityOption3 `security:"option"`
}

type MonitoringProjectsGroupsListRequest struct {
	PathParams  MonitoringProjectsGroupsListPathParams
	QueryParams MonitoringProjectsGroupsListQueryParams
	Security    MonitoringProjectsGroupsListSecurity
}

type MonitoringProjectsGroupsListResponse struct {
	ContentType        string
	ListGroupsResponse *shared.ListGroupsResponse
	StatusCode         int64
}
