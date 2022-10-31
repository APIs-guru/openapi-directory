package operations

import (
"openapi/pkg/models/shared")

type CloudbillingProjectsGetBillingInfoPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudbillingProjectsGetBillingInfoQueryParams struct {
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

type CloudbillingProjectsGetBillingInfoSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingProjectsGetBillingInfoSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingProjectsGetBillingInfoSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingProjectsGetBillingInfoSecurity struct {
    Option1 *CloudbillingProjectsGetBillingInfoSecurityOption1 `security:"option"`
    Option2 *CloudbillingProjectsGetBillingInfoSecurityOption2 `security:"option"`
    Option3 *CloudbillingProjectsGetBillingInfoSecurityOption3 `security:"option"`
    
}

type CloudbillingProjectsGetBillingInfoRequest struct {
    PathParams CloudbillingProjectsGetBillingInfoPathParams 
    QueryParams CloudbillingProjectsGetBillingInfoQueryParams 
    Security CloudbillingProjectsGetBillingInfoSecurity 
    
}

type CloudbillingProjectsGetBillingInfoResponse struct {
    ContentType string 
    ProjectBillingInfo *shared.ProjectBillingInfo 
    StatusCode int64 
    
}

