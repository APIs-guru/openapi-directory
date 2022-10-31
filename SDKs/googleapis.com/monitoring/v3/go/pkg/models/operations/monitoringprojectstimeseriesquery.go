package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsTimeSeriesQueryPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MonitoringProjectsTimeSeriesQueryQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MonitoringProjectsTimeSeriesQuerySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsTimeSeriesQuerySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsTimeSeriesQuerySecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsTimeSeriesQuerySecurity struct {
    Option1 *MonitoringProjectsTimeSeriesQuerySecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsTimeSeriesQuerySecurityOption2 `security:"option"`
    Option3 *MonitoringProjectsTimeSeriesQuerySecurityOption3 `security:"option"`
    
}

type MonitoringProjectsTimeSeriesQueryRequest struct {
    PathParams MonitoringProjectsTimeSeriesQueryPathParams 
    QueryParams MonitoringProjectsTimeSeriesQueryQueryParams 
    Request *shared.QueryTimeSeriesRequest `request:"mediaType=application/json"`
    Security MonitoringProjectsTimeSeriesQuerySecurity 
    
}

type MonitoringProjectsTimeSeriesQueryResponse struct {
    ContentType string 
    QueryTimeSeriesResponse *shared.QueryTimeSeriesResponse 
    StatusCode int64 
    
}

