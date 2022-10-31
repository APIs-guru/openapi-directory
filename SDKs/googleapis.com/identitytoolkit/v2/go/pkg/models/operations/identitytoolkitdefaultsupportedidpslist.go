package operations

import (
"openapi/pkg/models/shared")

type IdentitytoolkitDefaultSupportedIdpsListQueryParams struct {
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

type IdentitytoolkitDefaultSupportedIdpsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitDefaultSupportedIdpsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IdentitytoolkitDefaultSupportedIdpsListSecurity struct {
    Option1 *IdentitytoolkitDefaultSupportedIdpsListSecurityOption1 `security:"option"`
    Option2 *IdentitytoolkitDefaultSupportedIdpsListSecurityOption2 `security:"option"`
    
}

type IdentitytoolkitDefaultSupportedIdpsListRequest struct {
    QueryParams IdentitytoolkitDefaultSupportedIdpsListQueryParams 
    Security IdentitytoolkitDefaultSupportedIdpsListSecurity 
    
}

type IdentitytoolkitDefaultSupportedIdpsListResponse struct {
    ContentType string 
    GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse *shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse 
    StatusCode int64 
    
}

