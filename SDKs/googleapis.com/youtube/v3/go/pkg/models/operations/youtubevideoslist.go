package operations

import (
"openapi/pkg/models/shared")


type YoutubeVideosListChartEnum string

const (
    YoutubeVideosListChartEnumChartUnspecified YoutubeVideosListChartEnum = "chartUnspecified"
YoutubeVideosListChartEnumMostPopular YoutubeVideosListChartEnum = "mostPopular"
)



type YoutubeVideosListMyRatingEnum string

const (
    YoutubeVideosListMyRatingEnumNone YoutubeVideosListMyRatingEnum = "none"
YoutubeVideosListMyRatingEnumLike YoutubeVideosListMyRatingEnum = "like"
YoutubeVideosListMyRatingEnumDislike YoutubeVideosListMyRatingEnum = "dislike"
)


type YoutubeVideosListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Chart *YoutubeVideosListChartEnum `queryParam:"style=form,explode=true,name=chart"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Hl *string `queryParam:"style=form,explode=true,name=hl"`
    ID []string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    MaxHeight *int64 `queryParam:"style=form,explode=true,name=maxHeight"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    MaxWidth *int64 `queryParam:"style=form,explode=true,name=maxWidth"`
    MyRating *YoutubeVideosListMyRatingEnum `queryParam:"style=form,explode=true,name=myRating"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RegionCode *string `queryParam:"style=form,explode=true,name=regionCode"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    VideoCategoryID *string `queryParam:"style=form,explode=true,name=videoCategoryId"`
    
}

type YoutubeVideosListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeVideosListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeVideosListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeVideosListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeVideosListSecurity struct {
    Option1 *YoutubeVideosListSecurityOption1 `security:"option"`
    Option2 *YoutubeVideosListSecurityOption2 `security:"option"`
    Option3 *YoutubeVideosListSecurityOption3 `security:"option"`
    Option4 *YoutubeVideosListSecurityOption4 `security:"option"`
    
}

type YoutubeVideosListRequest struct {
    QueryParams YoutubeVideosListQueryParams 
    Security YoutubeVideosListSecurity 
    
}

type YoutubeVideosListResponse struct {
    ContentType string 
    StatusCode int64 
    VideoListResponse *shared.VideoListResponse 
    
}

