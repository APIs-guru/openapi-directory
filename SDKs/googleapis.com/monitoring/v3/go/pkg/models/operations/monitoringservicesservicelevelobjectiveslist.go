package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringServicesServiceLevelObjectivesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type MonitoringServicesServiceLevelObjectivesListViewEnum string

const (
	MonitoringServicesServiceLevelObjectivesListViewEnumViewUnspecified MonitoringServicesServiceLevelObjectivesListViewEnum = "VIEW_UNSPECIFIED"
	MonitoringServicesServiceLevelObjectivesListViewEnumFull            MonitoringServicesServiceLevelObjectivesListViewEnum = "FULL"
	MonitoringServicesServiceLevelObjectivesListViewEnumExplicit        MonitoringServicesServiceLevelObjectivesListViewEnum = "EXPLICIT"
)

type MonitoringServicesServiceLevelObjectivesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                     `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                               `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                       `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                               `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                               `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                                               `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                                               `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                               `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                                `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                               `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                 `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                               `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                               `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                               `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *MonitoringServicesServiceLevelObjectivesListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type MonitoringServicesServiceLevelObjectivesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringServicesServiceLevelObjectivesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringServicesServiceLevelObjectivesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringServicesServiceLevelObjectivesListSecurity struct {
	Option1 *MonitoringServicesServiceLevelObjectivesListSecurityOption1 `security:"option"`
	Option2 *MonitoringServicesServiceLevelObjectivesListSecurityOption2 `security:"option"`
	Option3 *MonitoringServicesServiceLevelObjectivesListSecurityOption3 `security:"option"`
}

type MonitoringServicesServiceLevelObjectivesListRequest struct {
	PathParams  MonitoringServicesServiceLevelObjectivesListPathParams
	QueryParams MonitoringServicesServiceLevelObjectivesListQueryParams
	Security    MonitoringServicesServiceLevelObjectivesListSecurity
}

type MonitoringServicesServiceLevelObjectivesListResponse struct {
	ContentType                        string
	ListServiceLevelObjectivesResponse *shared.ListServiceLevelObjectivesResponse
	StatusCode                         int64
}
