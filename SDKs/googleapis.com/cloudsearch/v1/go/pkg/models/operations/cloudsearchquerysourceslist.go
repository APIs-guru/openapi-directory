package operations

import (
"openapi/pkg/models/shared")

type CloudsearchQuerySourcesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RequestOptionsDebugOptionsEnableDebugging *bool `queryParam:"style=form,explode=true,name=requestOptions.debugOptions.enableDebugging"`
    RequestOptionsLanguageCode *string `queryParam:"style=form,explode=true,name=requestOptions.languageCode"`
    RequestOptionsSearchApplicationID *string `queryParam:"style=form,explode=true,name=requestOptions.searchApplicationId"`
    RequestOptionsTimeZone *string `queryParam:"style=form,explode=true,name=requestOptions.timeZone"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudsearchQuerySourcesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchQuerySourcesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchQuerySourcesListSecurity struct {
    Option1 *CloudsearchQuerySourcesListSecurityOption1 `security:"option"`
    Option2 *CloudsearchQuerySourcesListSecurityOption2 `security:"option"`
    
}

type CloudsearchQuerySourcesListRequest struct {
    QueryParams CloudsearchQuerySourcesListQueryParams 
    Security CloudsearchQuerySourcesListSecurity 
    
}

type CloudsearchQuerySourcesListResponse struct {
    ContentType string 
    ListQuerySourcesResponse *shared.ListQuerySourcesResponse 
    StatusCode int64 
    
}

