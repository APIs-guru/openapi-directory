package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsMembershipsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudidentityGroupsMembershipsListViewEnum string

const (
	CloudidentityGroupsMembershipsListViewEnumViewUnspecified CloudidentityGroupsMembershipsListViewEnum = "VIEW_UNSPECIFIED"
	CloudidentityGroupsMembershipsListViewEnumBasic           CloudidentityGroupsMembershipsListViewEnum = "BASIC"
	CloudidentityGroupsMembershipsListViewEnumFull            CloudidentityGroupsMembershipsListViewEnum = "FULL"
)

type CloudidentityGroupsMembershipsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                           `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                     `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                             `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                     `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                     `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                     `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                     `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                      `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                     `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                       `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                     `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                     `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                     `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *CloudidentityGroupsMembershipsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type CloudidentityGroupsMembershipsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsListSecurity struct {
	Option1 *CloudidentityGroupsMembershipsListSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsMembershipsListSecurityOption2 `security:"option"`
	Option3 *CloudidentityGroupsMembershipsListSecurityOption3 `security:"option"`
}

type CloudidentityGroupsMembershipsListRequest struct {
	PathParams  CloudidentityGroupsMembershipsListPathParams
	QueryParams CloudidentityGroupsMembershipsListQueryParams
	Security    CloudidentityGroupsMembershipsListSecurity
}

type CloudidentityGroupsMembershipsListResponse struct {
	ContentType             string
	ListMembershipsResponse *shared.ListMembershipsResponse
	StatusCode              int64
}
