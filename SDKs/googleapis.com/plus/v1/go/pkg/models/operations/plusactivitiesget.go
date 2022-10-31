package operations

import (
"openapi/pkg/models/shared")

type PlusActivitiesGetPathParams struct {
    ActivityID string `pathParam:"style=simple,explode=false,name=activityId"`
    
}

type PlusActivitiesGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type PlusActivitiesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusActivitiesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusActivitiesGetSecurity struct {
    Option1 *PlusActivitiesGetSecurityOption1 `security:"option"`
    Option2 *PlusActivitiesGetSecurityOption2 `security:"option"`
    
}

type PlusActivitiesGetRequest struct {
    PathParams PlusActivitiesGetPathParams 
    QueryParams PlusActivitiesGetQueryParams 
    Security PlusActivitiesGetSecurity 
    
}

type PlusActivitiesGetResponse struct {
    Activity *shared.Activity 
    ContentType string 
    StatusCode int64 
    
}

