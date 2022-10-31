package operations

import (
"openapi/pkg/models/shared")

type DisplayvideoGoogleAudiencesGetPathParams struct {
    GoogleAudienceID string `pathParam:"style=simple,explode=false,name=googleAudienceId"`
    
}

type DisplayvideoGoogleAudiencesGetQueryParams struct {
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

type DisplayvideoGoogleAudiencesGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoGoogleAudiencesGetRequest struct {
    PathParams DisplayvideoGoogleAudiencesGetPathParams 
    QueryParams DisplayvideoGoogleAudiencesGetQueryParams 
    Security DisplayvideoGoogleAudiencesGetSecurity 
    
}

type DisplayvideoGoogleAudiencesGetResponse struct {
    ContentType string 
    GoogleAudience *shared.GoogleAudience 
    StatusCode int64 
    
}

