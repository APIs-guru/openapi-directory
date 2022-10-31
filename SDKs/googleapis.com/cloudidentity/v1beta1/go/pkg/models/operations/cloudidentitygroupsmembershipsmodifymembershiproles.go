package operations

import (
"openapi/pkg/models/shared")

type CloudidentityGroupsMembershipsModifyMembershipRolesPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudidentityGroupsMembershipsModifyMembershipRolesQueryParams struct {
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

type CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudidentityGroupsMembershipsModifyMembershipRolesSecurity struct {
    Option1 *CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1 `security:"option"`
    Option2 *CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption2 `security:"option"`
    
}

type CloudidentityGroupsMembershipsModifyMembershipRolesRequest struct {
    PathParams CloudidentityGroupsMembershipsModifyMembershipRolesPathParams 
    QueryParams CloudidentityGroupsMembershipsModifyMembershipRolesQueryParams 
    Request *shared.ModifyMembershipRolesRequest `request:"mediaType=application/json"`
    Security CloudidentityGroupsMembershipsModifyMembershipRolesSecurity 
    
}

type CloudidentityGroupsMembershipsModifyMembershipRolesResponse struct {
    ContentType string 
    ModifyMembershipRolesResponse *shared.ModifyMembershipRolesResponse 
    StatusCode int64 
    
}

