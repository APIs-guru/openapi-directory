package operations

import (
"openapi/pkg/models/shared")

type YoutubeActivitiesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ChannelID *string `queryParam:"style=form,explode=true,name=channelId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Home *bool `queryParam:"style=form,explode=true,name=home"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    Mine *bool `queryParam:"style=form,explode=true,name=mine"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    PublishedAfter *string `queryParam:"style=form,explode=true,name=publishedAfter"`
    PublishedBefore *string `queryParam:"style=form,explode=true,name=publishedBefore"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RegionCode *string `queryParam:"style=form,explode=true,name=regionCode"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeActivitiesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeActivitiesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeActivitiesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeActivitiesListSecurity struct {
    Option1 *YoutubeActivitiesListSecurityOption1 `security:"option"`
    Option2 *YoutubeActivitiesListSecurityOption2 `security:"option"`
    Option3 *YoutubeActivitiesListSecurityOption3 `security:"option"`
    
}

type YoutubeActivitiesListRequest struct {
    QueryParams YoutubeActivitiesListQueryParams 
    Security YoutubeActivitiesListSecurity 
    
}

type YoutubeActivitiesListResponse struct {
    ActivityListResponse *shared.ActivityListResponse 
    ContentType string 
    StatusCode int64 
    
}

