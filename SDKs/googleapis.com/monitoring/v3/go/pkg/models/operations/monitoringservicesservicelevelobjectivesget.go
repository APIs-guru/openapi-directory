package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringServicesServiceLevelObjectivesGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type MonitoringServicesServiceLevelObjectivesGetViewEnum string

const (
	MonitoringServicesServiceLevelObjectivesGetViewEnumViewUnspecified MonitoringServicesServiceLevelObjectivesGetViewEnum = "VIEW_UNSPECIFIED"
	MonitoringServicesServiceLevelObjectivesGetViewEnumFull            MonitoringServicesServiceLevelObjectivesGetViewEnum = "FULL"
	MonitoringServicesServiceLevelObjectivesGetViewEnumExplicit        MonitoringServicesServiceLevelObjectivesGetViewEnum = "EXPLICIT"
)

type MonitoringServicesServiceLevelObjectivesGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                      `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                              `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                              `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                              `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *MonitoringServicesServiceLevelObjectivesGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type MonitoringServicesServiceLevelObjectivesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringServicesServiceLevelObjectivesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringServicesServiceLevelObjectivesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringServicesServiceLevelObjectivesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringServicesServiceLevelObjectivesGetSecurity struct {
	Option1 *MonitoringServicesServiceLevelObjectivesGetSecurityOption1 `security:"option"`
	Option2 *MonitoringServicesServiceLevelObjectivesGetSecurityOption2 `security:"option"`
	Option3 *MonitoringServicesServiceLevelObjectivesGetSecurityOption3 `security:"option"`
	Option4 *MonitoringServicesServiceLevelObjectivesGetSecurityOption4 `security:"option"`
}

type MonitoringServicesServiceLevelObjectivesGetRequest struct {
	PathParams  MonitoringServicesServiceLevelObjectivesGetPathParams
	QueryParams MonitoringServicesServiceLevelObjectivesGetQueryParams
	Security    MonitoringServicesServiceLevelObjectivesGetSecurity
}

type MonitoringServicesServiceLevelObjectivesGetResponse struct {
	ContentType           string
	ServiceLevelObjective *shared.ServiceLevelObjective
	StatusCode            int64
}
