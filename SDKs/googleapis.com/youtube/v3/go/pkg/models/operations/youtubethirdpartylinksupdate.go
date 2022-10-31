package operations

import (
"openapi/pkg/models/shared")

type YoutubeThirdPartyLinksUpdateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ExternalChannelID *string `queryParam:"style=form,explode=true,name=externalChannelId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeThirdPartyLinksUpdateRequest struct {
    QueryParams YoutubeThirdPartyLinksUpdateQueryParams 
    Request *shared.ThirdPartyLink `request:"mediaType=application/json"`
    
}

type YoutubeThirdPartyLinksUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    ThirdPartyLink *shared.ThirdPartyLink 
    
}

