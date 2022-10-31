package operations

import (
"openapi/pkg/models/shared")

type DisplayvideoAdvertisersCampaignsGetPathParams struct {
    AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
    CampaignID string `pathParam:"style=simple,explode=false,name=campaignId"`
    
}

type DisplayvideoAdvertisersCampaignsGetQueryParams struct {
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

type DisplayvideoAdvertisersCampaignsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoAdvertisersCampaignsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoAdvertisersCampaignsGetSecurity struct {
    Option1 *DisplayvideoAdvertisersCampaignsGetSecurityOption1 `security:"option"`
    Option2 *DisplayvideoAdvertisersCampaignsGetSecurityOption2 `security:"option"`
    
}

type DisplayvideoAdvertisersCampaignsGetRequest struct {
    PathParams DisplayvideoAdvertisersCampaignsGetPathParams 
    QueryParams DisplayvideoAdvertisersCampaignsGetQueryParams 
    Security DisplayvideoAdvertisersCampaignsGetSecurity 
    
}

type DisplayvideoAdvertisersCampaignsGetResponse struct {
    Campaign *shared.Campaign 
    ContentType string 
    StatusCode int64 
    
}

