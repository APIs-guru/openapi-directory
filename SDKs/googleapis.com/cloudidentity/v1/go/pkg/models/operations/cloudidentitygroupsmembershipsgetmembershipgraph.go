package operations

import (
"openapi/pkg/models/shared")

type CloudidentityGroupsMembershipsGetMembershipGraphPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudidentityGroupsMembershipsGetMembershipGraphQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsMembershipsGetMembershipGraphSecurity struct {
    Option1 *CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1 `security:"option"`
    Option2 *CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2 `security:"option"`
    Option3 *CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3 `security:"option"`
    
}

type CloudidentityGroupsMembershipsGetMembershipGraphRequest struct {
    PathParams CloudidentityGroupsMembershipsGetMembershipGraphPathParams 
    QueryParams CloudidentityGroupsMembershipsGetMembershipGraphQueryParams 
    Security CloudidentityGroupsMembershipsGetMembershipGraphSecurity 
    
}

type CloudidentityGroupsMembershipsGetMembershipGraphResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

