package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesClustersHotTabletsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigtableadminProjectsInstancesClustersHotTabletsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	EndTime        *string           `queryParam:"style=form,explode=true,name=endTime"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	StartTime      *string           `queryParam:"style=form,explode=true,name=startTime"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersHotTabletsListSecurity struct {
	Option1 *BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5 `security:"option"`
	Option6 *BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6 `security:"option"`
}

type BigtableadminProjectsInstancesClustersHotTabletsListRequest struct {
	PathParams  BigtableadminProjectsInstancesClustersHotTabletsListPathParams
	QueryParams BigtableadminProjectsInstancesClustersHotTabletsListQueryParams
	Security    BigtableadminProjectsInstancesClustersHotTabletsListSecurity
}

type BigtableadminProjectsInstancesClustersHotTabletsListResponse struct {
	ContentType            string
	ListHotTabletsResponse *shared.ListHotTabletsResponse
	StatusCode             int64
}
