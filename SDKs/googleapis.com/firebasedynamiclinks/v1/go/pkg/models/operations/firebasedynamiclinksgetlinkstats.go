package operations

import (
"openapi/pkg/models/shared")

type FirebasedynamiclinksGetLinkStatsPathParams struct {
    DynamicLink string `pathParam:"style=simple,explode=false,name=dynamicLink"`
    
}

type FirebasedynamiclinksGetLinkStatsQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DurationDays *string `queryParam:"style=form,explode=true,name=durationDays"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SdkVersion *string `queryParam:"style=form,explode=true,name=sdkVersion"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebasedynamiclinksGetLinkStatsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasedynamiclinksGetLinkStatsRequest struct {
    PathParams FirebasedynamiclinksGetLinkStatsPathParams 
    QueryParams FirebasedynamiclinksGetLinkStatsQueryParams 
    Security FirebasedynamiclinksGetLinkStatsSecurity 
    
}

type FirebasedynamiclinksGetLinkStatsResponse struct {
    ContentType string 
    DynamicLinkStats *shared.DynamicLinkStats 
    StatusCode int64 
    
}

