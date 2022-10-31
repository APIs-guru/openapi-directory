package operations

import (
"openapi/pkg/models/shared")


type GamesConfigurationImageConfigurationsUploadImageTypeEnum string

const (
    GamesConfigurationImageConfigurationsUploadImageTypeEnumImageTypeUnspecified GamesConfigurationImageConfigurationsUploadImageTypeEnum = "IMAGE_TYPE_UNSPECIFIED"
GamesConfigurationImageConfigurationsUploadImageTypeEnumAchievementIcon GamesConfigurationImageConfigurationsUploadImageTypeEnum = "ACHIEVEMENT_ICON"
GamesConfigurationImageConfigurationsUploadImageTypeEnumLeaderboardIcon GamesConfigurationImageConfigurationsUploadImageTypeEnum = "LEADERBOARD_ICON"
)


type GamesConfigurationImageConfigurationsUploadPathParams struct {
    ImageType GamesConfigurationImageConfigurationsUploadImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
    ResourceID string `pathParam:"style=simple,explode=false,name=resourceId"`
    
}

type GamesConfigurationImageConfigurationsUploadQueryParams struct {
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

type GamesConfigurationImageConfigurationsUploadSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GamesConfigurationImageConfigurationsUploadRequest struct {
    PathParams GamesConfigurationImageConfigurationsUploadPathParams 
    QueryParams GamesConfigurationImageConfigurationsUploadQueryParams 
    Security GamesConfigurationImageConfigurationsUploadSecurity 
    
}

type GamesConfigurationImageConfigurationsUploadResponse struct {
    ContentType string 
    ImageConfiguration *shared.ImageConfiguration 
    StatusCode int64 
    
}

