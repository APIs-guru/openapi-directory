package operations

import (
"openapi/pkg/models/shared")

type DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams struct {
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

type DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatastreamProjectsLocationsConnectionProfilesDiscoverRequest struct {
    PathParams DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams 
    QueryParams DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams 
    Request *shared.DiscoverConnectionProfileRequest `request:"mediaType=application/json"`
    Security DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity 
    
}

type DatastreamProjectsLocationsConnectionProfilesDiscoverResponse struct {
    ContentType string 
    DiscoverConnectionProfileResponse *shared.DiscoverConnectionProfileResponse 
    StatusCode int64 
    
}

