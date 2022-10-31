package operations

import (
"openapi/pkg/models/shared")

type FirebasedatabaseProjectsLocationsInstancesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebasedatabaseProjectsLocationsInstancesListQueryParams struct {
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
    ShowDeleted *bool `queryParam:"style=form,explode=true,name=showDeleted"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebasedatabaseProjectsLocationsInstancesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedatabaseProjectsLocationsInstancesListSecurity struct {
    Option1 *FirebasedatabaseProjectsLocationsInstancesListSecurityOption1 `security:"option"`
    Option2 *FirebasedatabaseProjectsLocationsInstancesListSecurityOption2 `security:"option"`
    Option3 *FirebasedatabaseProjectsLocationsInstancesListSecurityOption3 `security:"option"`
    Option4 *FirebasedatabaseProjectsLocationsInstancesListSecurityOption4 `security:"option"`
    
}

type FirebasedatabaseProjectsLocationsInstancesListRequest struct {
    PathParams FirebasedatabaseProjectsLocationsInstancesListPathParams 
    QueryParams FirebasedatabaseProjectsLocationsInstancesListQueryParams 
    Security FirebasedatabaseProjectsLocationsInstancesListSecurity 
    
}

type FirebasedatabaseProjectsLocationsInstancesListResponse struct {
    ContentType string 
    ListDatabaseInstancesResponse *shared.ListDatabaseInstancesResponse 
    StatusCode int64 
    
}

