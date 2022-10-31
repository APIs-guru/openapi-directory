package operations

import (
"openapi/pkg/models/shared")

type DisplayvideoCustomBiddingAlgorithmsScriptsGetPathParams struct {
    CustomBiddingAlgorithmID string `pathParam:"style=simple,explode=false,name=customBiddingAlgorithmId"`
    CustomBiddingScriptID string `pathParam:"style=simple,explode=false,name=customBiddingScriptId"`
    
}

type DisplayvideoCustomBiddingAlgorithmsScriptsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AdvertiserID *string `queryParam:"style=form,explode=true,name=advertiserId"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PartnerID *string `queryParam:"style=form,explode=true,name=partnerId"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest struct {
    PathParams DisplayvideoCustomBiddingAlgorithmsScriptsGetPathParams 
    QueryParams DisplayvideoCustomBiddingAlgorithmsScriptsGetQueryParams 
    Security DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity 
    
}

type DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse struct {
    ContentType string 
    CustomBiddingScript *shared.CustomBiddingScript 
    StatusCode int64 
    
}

