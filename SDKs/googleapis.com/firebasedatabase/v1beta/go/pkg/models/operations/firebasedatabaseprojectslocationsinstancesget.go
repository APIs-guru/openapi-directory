package operations

import (
"openapi/pkg/models/shared")

type FirebasedatabaseProjectsLocationsInstancesGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type FirebasedatabaseProjectsLocationsInstancesGetQueryParams struct {
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

type FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesGetSecurity struct {
    Option1 *FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1 `security:"option"`
    Option2 *FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2 `security:"option"`
    Option3 *FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3 `security:"option"`
    Option4 *FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4 `security:"option"`
    
}

type FirebasedatabaseProjectsLocationsInstancesGetRequest struct {
    PathParams FirebasedatabaseProjectsLocationsInstancesGetPathParams 
    QueryParams FirebasedatabaseProjectsLocationsInstancesGetQueryParams 
    Security FirebasedatabaseProjectsLocationsInstancesGetSecurity 
    
}

type FirebasedatabaseProjectsLocationsInstancesGetResponse struct {
    ContentType string 
    DatabaseInstance *shared.DatabaseInstance 
    StatusCode int64 
    
}

