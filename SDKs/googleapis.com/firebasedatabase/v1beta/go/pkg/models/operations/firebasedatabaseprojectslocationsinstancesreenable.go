package operations

import (
"openapi/pkg/models/shared")

type FirebasedatabaseProjectsLocationsInstancesReenablePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type FirebasedatabaseProjectsLocationsInstancesReenableQueryParams struct {
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

type FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesReenableSecurity struct {
    Option1 *FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1 `security:"option"`
    Option2 *FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2 `security:"option"`
    
}

type FirebasedatabaseProjectsLocationsInstancesReenableRequest struct {
    PathParams FirebasedatabaseProjectsLocationsInstancesReenablePathParams 
    QueryParams FirebasedatabaseProjectsLocationsInstancesReenableQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security FirebasedatabaseProjectsLocationsInstancesReenableSecurity 
    
}

type FirebasedatabaseProjectsLocationsInstancesReenableResponse struct {
    ContentType string 
    DatabaseInstance *shared.DatabaseInstance 
    StatusCode int64 
    
}

