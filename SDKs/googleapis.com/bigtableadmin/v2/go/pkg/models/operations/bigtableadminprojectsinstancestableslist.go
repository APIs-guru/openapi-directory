package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesTablesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigtableadminProjectsInstancesTablesListViewEnum string

const (
	BigtableadminProjectsInstancesTablesListViewEnumViewUnspecified BigtableadminProjectsInstancesTablesListViewEnum = "VIEW_UNSPECIFIED"
	BigtableadminProjectsInstancesTablesListViewEnumNameOnly        BigtableadminProjectsInstancesTablesListViewEnum = "NAME_ONLY"
	BigtableadminProjectsInstancesTablesListViewEnumSchemaView      BigtableadminProjectsInstancesTablesListViewEnum = "SCHEMA_VIEW"
	BigtableadminProjectsInstancesTablesListViewEnumReplicationView BigtableadminProjectsInstancesTablesListViewEnum = "REPLICATION_VIEW"
	BigtableadminProjectsInstancesTablesListViewEnumEncryptionView  BigtableadminProjectsInstancesTablesListViewEnum = "ENCRYPTION_VIEW"
	BigtableadminProjectsInstancesTablesListViewEnumFull            BigtableadminProjectsInstancesTablesListViewEnum = "FULL"
)

type BigtableadminProjectsInstancesTablesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                           `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *BigtableadminProjectsInstancesTablesListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type BigtableadminProjectsInstancesTablesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesListSecurity struct {
	Option1 *BigtableadminProjectsInstancesTablesListSecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesTablesListSecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesTablesListSecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesTablesListSecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesTablesListSecurityOption5 `security:"option"`
	Option6 *BigtableadminProjectsInstancesTablesListSecurityOption6 `security:"option"`
}

type BigtableadminProjectsInstancesTablesListRequest struct {
	PathParams  BigtableadminProjectsInstancesTablesListPathParams
	QueryParams BigtableadminProjectsInstancesTablesListQueryParams
	Security    BigtableadminProjectsInstancesTablesListSecurity
}

type BigtableadminProjectsInstancesTablesListResponse struct {
	ContentType        string
	ListTablesResponse *shared.ListTablesResponse
	StatusCode         int64
}
