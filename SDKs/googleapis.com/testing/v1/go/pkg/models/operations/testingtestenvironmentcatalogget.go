package operations

import (
"openapi/pkg/models/shared")


type TestingTestEnvironmentCatalogGetEnvironmentTypeEnum string

const (
    TestingTestEnvironmentCatalogGetEnvironmentTypeEnumEnvironmentTypeUnspecified TestingTestEnvironmentCatalogGetEnvironmentTypeEnum = "ENVIRONMENT_TYPE_UNSPECIFIED"
TestingTestEnvironmentCatalogGetEnvironmentTypeEnumAndroid TestingTestEnvironmentCatalogGetEnvironmentTypeEnum = "ANDROID"
TestingTestEnvironmentCatalogGetEnvironmentTypeEnumIos TestingTestEnvironmentCatalogGetEnvironmentTypeEnum = "IOS"
TestingTestEnvironmentCatalogGetEnvironmentTypeEnumNetworkConfiguration TestingTestEnvironmentCatalogGetEnvironmentTypeEnum = "NETWORK_CONFIGURATION"
TestingTestEnvironmentCatalogGetEnvironmentTypeEnumProvidedSoftware TestingTestEnvironmentCatalogGetEnvironmentTypeEnum = "PROVIDED_SOFTWARE"
TestingTestEnvironmentCatalogGetEnvironmentTypeEnumDeviceIPBlocks TestingTestEnvironmentCatalogGetEnvironmentTypeEnum = "DEVICE_IP_BLOCKS"
)


type TestingTestEnvironmentCatalogGetPathParams struct {
    EnvironmentType TestingTestEnvironmentCatalogGetEnvironmentTypeEnum `pathParam:"style=simple,explode=false,name=environmentType"`
    
}

type TestingTestEnvironmentCatalogGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    ProjectID *string `queryParam:"style=form,explode=true,name=projectId"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type TestingTestEnvironmentCatalogGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TestingTestEnvironmentCatalogGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TestingTestEnvironmentCatalogGetSecurity struct {
    Option1 *TestingTestEnvironmentCatalogGetSecurityOption1 `security:"option"`
    Option2 *TestingTestEnvironmentCatalogGetSecurityOption2 `security:"option"`
    
}

type TestingTestEnvironmentCatalogGetRequest struct {
    PathParams TestingTestEnvironmentCatalogGetPathParams 
    QueryParams TestingTestEnvironmentCatalogGetQueryParams 
    Security TestingTestEnvironmentCatalogGetSecurity 
    
}

type TestingTestEnvironmentCatalogGetResponse struct {
    ContentType string 
    StatusCode int64 
    TestEnvironmentCatalog *shared.TestEnvironmentCatalog 
    
}

