package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsListViewEnum string

const (
	CloudidentityGroupsListViewEnumViewUnspecified CloudidentityGroupsListViewEnum = "VIEW_UNSPECIFIED"
	CloudidentityGroupsListViewEnumBasic           CloudidentityGroupsListViewEnum = "BASIC"
	CloudidentityGroupsListViewEnumFull            CloudidentityGroupsListViewEnum = "FULL"
)

type CloudidentityGroupsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                          `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                  `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                          `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                          `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                          `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                          `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                           `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                          `queryParam:"style=form,explode=true,name=pageToken"`
	Parent         *string                          `queryParam:"style=form,explode=true,name=parent"`
	PrettyPrint    *bool                            `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                          `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                          `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                          `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *CloudidentityGroupsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type CloudidentityGroupsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsListSecurity struct {
	Option1 *CloudidentityGroupsListSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsListSecurityOption2 `security:"option"`
	Option3 *CloudidentityGroupsListSecurityOption3 `security:"option"`
}

type CloudidentityGroupsListRequest struct {
	QueryParams CloudidentityGroupsListQueryParams
	Security    CloudidentityGroupsListSecurity
}

type CloudidentityGroupsListResponse struct {
	ContentType        string
	ListGroupsResponse *shared.ListGroupsResponse
	StatusCode         int64
}
