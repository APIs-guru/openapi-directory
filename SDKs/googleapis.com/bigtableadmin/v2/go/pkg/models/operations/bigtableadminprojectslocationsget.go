package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsLocationsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BigtableadminProjectsLocationsGetViewEnum string

const (
	BigtableadminProjectsLocationsGetViewEnumViewUnspecified BigtableadminProjectsLocationsGetViewEnum = "VIEW_UNSPECIFIED"
	BigtableadminProjectsLocationsGetViewEnumNameOnly        BigtableadminProjectsLocationsGetViewEnum = "NAME_ONLY"
	BigtableadminProjectsLocationsGetViewEnumSchemaView      BigtableadminProjectsLocationsGetViewEnum = "SCHEMA_VIEW"
	BigtableadminProjectsLocationsGetViewEnumReplicationView BigtableadminProjectsLocationsGetViewEnum = "REPLICATION_VIEW"
	BigtableadminProjectsLocationsGetViewEnumEncryptionView  BigtableadminProjectsLocationsGetViewEnum = "ENCRYPTION_VIEW"
	BigtableadminProjectsLocationsGetViewEnumStatsView       BigtableadminProjectsLocationsGetViewEnum = "STATS_VIEW"
	BigtableadminProjectsLocationsGetViewEnumFull            BigtableadminProjectsLocationsGetViewEnum = "FULL"
)

type BigtableadminProjectsLocationsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                          `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                    `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                            `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                    `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                    `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                    `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                    `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                    `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                    `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                    `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *BigtableadminProjectsLocationsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type BigtableadminProjectsLocationsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsLocationsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsLocationsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsLocationsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsLocationsGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsLocationsGetSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsLocationsGetSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsLocationsGetSecurity struct {
	Option1 *BigtableadminProjectsLocationsGetSecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsLocationsGetSecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsLocationsGetSecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsLocationsGetSecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsLocationsGetSecurityOption5 `security:"option"`
	Option6 *BigtableadminProjectsLocationsGetSecurityOption6 `security:"option"`
	Option7 *BigtableadminProjectsLocationsGetSecurityOption7 `security:"option"`
}

type BigtableadminProjectsLocationsGetRequest struct {
	PathParams  BigtableadminProjectsLocationsGetPathParams
	QueryParams BigtableadminProjectsLocationsGetQueryParams
	Security    BigtableadminProjectsLocationsGetSecurity
}

type BigtableadminProjectsLocationsGetResponse struct {
	ContentType string
	Location    *shared.Location
	StatusCode  int64
}
