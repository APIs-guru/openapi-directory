package operations

import (
"openapi/pkg/models/shared")

type IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams struct {
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

type IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity struct {
    Option1 *IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1 `security:"option"`
    Option2 *IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2 `security:"option"`
    
}

type IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest struct {
    PathParams IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams 
    QueryParams IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams 
    Security IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity 
    
}

type IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse struct {
    ContentType string 
    GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse *shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse 
    StatusCode int64 
    
}

