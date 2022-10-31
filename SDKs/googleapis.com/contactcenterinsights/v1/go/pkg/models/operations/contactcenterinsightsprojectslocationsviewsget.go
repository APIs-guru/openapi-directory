package operations

import (
"openapi/pkg/models/shared")

type ContactcenterinsightsProjectsLocationsViewsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type ContactcenterinsightsProjectsLocationsViewsGetViewEnum string

const (
    ContactcenterinsightsProjectsLocationsViewsGetViewEnumConversationViewUnspecified ContactcenterinsightsProjectsLocationsViewsGetViewEnum = "CONVERSATION_VIEW_UNSPECIFIED"
ContactcenterinsightsProjectsLocationsViewsGetViewEnumFull ContactcenterinsightsProjectsLocationsViewsGetViewEnum = "FULL"
ContactcenterinsightsProjectsLocationsViewsGetViewEnumBasic ContactcenterinsightsProjectsLocationsViewsGetViewEnum = "BASIC"
)


type ContactcenterinsightsProjectsLocationsViewsGetQueryParams struct {
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
    View *ContactcenterinsightsProjectsLocationsViewsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type ContactcenterinsightsProjectsLocationsViewsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ContactcenterinsightsProjectsLocationsViewsGetRequest struct {
    PathParams ContactcenterinsightsProjectsLocationsViewsGetPathParams 
    QueryParams ContactcenterinsightsProjectsLocationsViewsGetQueryParams 
    Security ContactcenterinsightsProjectsLocationsViewsGetSecurity 
    
}

type ContactcenterinsightsProjectsLocationsViewsGetResponse struct {
    ContentType string 
    GoogleCloudContactcenterinsightsV1View *shared.GoogleCloudContactcenterinsightsV1View 
    StatusCode int64 
    
}

