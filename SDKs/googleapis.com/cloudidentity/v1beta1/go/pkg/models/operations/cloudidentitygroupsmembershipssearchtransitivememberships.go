package operations

import (
"openapi/pkg/models/shared")

type CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity struct {
    Option1 *CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1 `security:"option"`
    Option2 *CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2 `security:"option"`
    Option3 *CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3 `security:"option"`
    
}

type CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest struct {
    PathParams CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams 
    QueryParams CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams 
    Security CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity 
    
}

type CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse struct {
    ContentType string 
    SearchTransitiveMembershipsResponse *shared.SearchTransitiveMembershipsResponse 
    StatusCode int64 
    
}

