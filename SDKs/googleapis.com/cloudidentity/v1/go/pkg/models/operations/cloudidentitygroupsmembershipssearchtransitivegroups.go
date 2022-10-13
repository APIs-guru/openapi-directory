package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query          *string           `queryParam:"style=form,explode=true,name=query"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity struct {
	Option1 *CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1 `security:"option"`
	Option2 *CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2 `security:"option"`
	Option3 *CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3 `security:"option"`
}

type CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest struct {
	PathParams  CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams
	QueryParams CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams
	Security    CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity
}

type CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse struct {
	ContentType                    string
	SearchTransitiveGroupsResponse *shared.SearchTransitiveGroupsResponse
	StatusCode                     int64
}
