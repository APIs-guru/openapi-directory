package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesClustersListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigtableadminProjectsInstancesClustersListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigtableadminProjectsInstancesClustersListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersListSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersListSecurity struct {
	Option1 *BigtableadminProjectsInstancesClustersListSecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesClustersListSecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesClustersListSecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesClustersListSecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesClustersListSecurityOption5 `security:"option"`
	Option6 *BigtableadminProjectsInstancesClustersListSecurityOption6 `security:"option"`
	Option7 *BigtableadminProjectsInstancesClustersListSecurityOption7 `security:"option"`
}

type BigtableadminProjectsInstancesClustersListRequest struct {
	PathParams  BigtableadminProjectsInstancesClustersListPathParams
	QueryParams BigtableadminProjectsInstancesClustersListQueryParams
	Security    BigtableadminProjectsInstancesClustersListSecurity
}

type BigtableadminProjectsInstancesClustersListResponse struct {
	ContentType          string
	ListClustersResponse *shared.ListClustersResponse
	StatusCode           int64
}
