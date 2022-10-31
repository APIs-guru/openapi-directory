package operations

import (
"openapi/pkg/models/shared")

type SourcerepoProjectsReposTestIamPermissionsPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type SourcerepoProjectsReposTestIamPermissionsQueryParams struct {
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

type SourcerepoProjectsReposTestIamPermissionsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SourcerepoProjectsReposTestIamPermissionsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SourcerepoProjectsReposTestIamPermissionsSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SourcerepoProjectsReposTestIamPermissionsSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SourcerepoProjectsReposTestIamPermissionsSecurity struct {
    Option1 *SourcerepoProjectsReposTestIamPermissionsSecurityOption1 `security:"option"`
    Option2 *SourcerepoProjectsReposTestIamPermissionsSecurityOption2 `security:"option"`
    Option3 *SourcerepoProjectsReposTestIamPermissionsSecurityOption3 `security:"option"`
    Option4 *SourcerepoProjectsReposTestIamPermissionsSecurityOption4 `security:"option"`
    
}

type SourcerepoProjectsReposTestIamPermissionsRequest struct {
    PathParams SourcerepoProjectsReposTestIamPermissionsPathParams 
    QueryParams SourcerepoProjectsReposTestIamPermissionsQueryParams 
    Request *shared.TestIamPermissionsRequest `request:"mediaType=application/json"`
    Security SourcerepoProjectsReposTestIamPermissionsSecurity 
    
}

type SourcerepoProjectsReposTestIamPermissionsResponse struct {
    ContentType string 
    StatusCode int64 
    TestIamPermissionsResponse *shared.TestIamPermissionsResponse 
    
}

