package operations

import (
"openapi/pkg/models/shared")

type FirebasedatabaseProjectsLocationsInstancesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebasedatabaseProjectsLocationsInstancesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DatabaseID *string `queryParam:"style=form,explode=true,name=databaseId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    ValidateOnly *bool `queryParam:"style=form,explode=true,name=validateOnly"`
    
}

type FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesCreateSecurity struct {
    Option1 *FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1 `security:"option"`
    Option2 *FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2 `security:"option"`
    
}

type FirebasedatabaseProjectsLocationsInstancesCreateRequest struct {
    PathParams FirebasedatabaseProjectsLocationsInstancesCreatePathParams 
    QueryParams FirebasedatabaseProjectsLocationsInstancesCreateQueryParams 
    Request *shared.DatabaseInstance `request:"mediaType=application/json"`
    Security FirebasedatabaseProjectsLocationsInstancesCreateSecurity 
    
}

type FirebasedatabaseProjectsLocationsInstancesCreateResponse struct {
    ContentType string 
    DatabaseInstance *shared.DatabaseInstance 
    StatusCode int64 
    
}

