package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsAlertPoliciesListPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MonitoringProjectsAlertPoliciesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type MonitoringProjectsAlertPoliciesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsAlertPoliciesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsAlertPoliciesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsAlertPoliciesListSecurity struct {
    Option1 *MonitoringProjectsAlertPoliciesListSecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsAlertPoliciesListSecurityOption2 `security:"option"`
    Option3 *MonitoringProjectsAlertPoliciesListSecurityOption3 `security:"option"`
    
}

type MonitoringProjectsAlertPoliciesListRequest struct {
    PathParams MonitoringProjectsAlertPoliciesListPathParams 
    QueryParams MonitoringProjectsAlertPoliciesListQueryParams 
    Security MonitoringProjectsAlertPoliciesListSecurity 
    
}

type MonitoringProjectsAlertPoliciesListResponse struct {
    ContentType string 
    ListAlertPoliciesResponse *shared.ListAlertPoliciesResponse 
    StatusCode int64 
    
}

