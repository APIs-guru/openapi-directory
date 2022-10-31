package operations

import (
"openapi/pkg/models/shared")

type StorageObjectsTestIamPermissionsPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    Object string `pathParam:"style=simple,explode=false,name=object"`
    
}

type StorageObjectsTestIamPermissionsQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Generation *string `queryParam:"style=form,explode=true,name=generation"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Permissions []string `queryParam:"style=form,explode=true,name=permissions"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    UserProject *string `queryParam:"style=form,explode=true,name=userProject"`
    
}

type StorageObjectsTestIamPermissionsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsTestIamPermissionsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsTestIamPermissionsSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsTestIamPermissionsSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsTestIamPermissionsSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsTestIamPermissionsSecurity struct {
    Option1 *StorageObjectsTestIamPermissionsSecurityOption1 `security:"option"`
    Option2 *StorageObjectsTestIamPermissionsSecurityOption2 `security:"option"`
    Option3 *StorageObjectsTestIamPermissionsSecurityOption3 `security:"option"`
    Option4 *StorageObjectsTestIamPermissionsSecurityOption4 `security:"option"`
    Option5 *StorageObjectsTestIamPermissionsSecurityOption5 `security:"option"`
    
}

type StorageObjectsTestIamPermissionsRequest struct {
    PathParams StorageObjectsTestIamPermissionsPathParams 
    QueryParams StorageObjectsTestIamPermissionsQueryParams 
    Security StorageObjectsTestIamPermissionsSecurity 
    
}

type StorageObjectsTestIamPermissionsResponse struct {
    ContentType string 
    StatusCode int64 
    TestIamPermissionsResponse *shared.TestIamPermissionsResponse 
    
}

