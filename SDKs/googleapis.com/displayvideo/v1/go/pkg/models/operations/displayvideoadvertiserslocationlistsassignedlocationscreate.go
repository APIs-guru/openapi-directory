package operations

import (
"openapi/pkg/models/shared")

type DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams struct {
    AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
    LocationListID string `pathParam:"style=simple,explode=false,name=locationListId"`
    
}

type DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams struct {
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

type DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest struct {
    PathParams DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams 
    QueryParams DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams 
    Request *shared.AssignedLocation `request:"mediaType=application/json"`
    Security DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity 
    
}

type DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse struct {
    AssignedLocation *shared.AssignedLocation 
    ContentType string 
    StatusCode int64 
    
}

