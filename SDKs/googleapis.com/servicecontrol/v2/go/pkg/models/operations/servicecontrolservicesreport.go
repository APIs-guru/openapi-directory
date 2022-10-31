package operations

import (
"openapi/pkg/models/shared")

type ServicecontrolServicesReportPathParams struct {
    ServiceName string `pathParam:"style=simple,explode=false,name=serviceName"`
    
}

type ServicecontrolServicesReportQueryParams struct {
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

type ServicecontrolServicesReportSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicecontrolServicesReportSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicecontrolServicesReportSecurity struct {
    Option1 *ServicecontrolServicesReportSecurityOption1 `security:"option"`
    Option2 *ServicecontrolServicesReportSecurityOption2 `security:"option"`
    
}

type ServicecontrolServicesReportRequest struct {
    PathParams ServicecontrolServicesReportPathParams 
    QueryParams ServicecontrolServicesReportQueryParams 
    Request *shared.ReportRequest `request:"mediaType=application/json"`
    Security ServicecontrolServicesReportSecurity 
    
}

type ServicecontrolServicesReportResponse struct {
    ContentType string 
    ReportResponse map[string]interface{} 
    StatusCode int64 
    
}

