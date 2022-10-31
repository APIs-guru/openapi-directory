package operations

import (
"openapi/pkg/models/shared")


type YoutubeVideosRateRatingEnum string

const (
    YoutubeVideosRateRatingEnumNone YoutubeVideosRateRatingEnum = "none"
YoutubeVideosRateRatingEnumLike YoutubeVideosRateRatingEnum = "like"
YoutubeVideosRateRatingEnumDislike YoutubeVideosRateRatingEnum = "dislike"
)


type YoutubeVideosRateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ID string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Rating YoutubeVideosRateRatingEnum `queryParam:"style=form,explode=true,name=rating"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeVideosRateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeVideosRateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeVideosRateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeVideosRateSecurity struct {
    Option1 *YoutubeVideosRateSecurityOption1 `security:"option"`
    Option2 *YoutubeVideosRateSecurityOption2 `security:"option"`
    Option3 *YoutubeVideosRateSecurityOption3 `security:"option"`
    
}

type YoutubeVideosRateRequest struct {
    QueryParams YoutubeVideosRateQueryParams 
    Security YoutubeVideosRateSecurity 
    
}

type YoutubeVideosRateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

