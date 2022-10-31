package operations

import (
"openapi/pkg/models/shared")

type CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DebugOptionsEnableDebugging *bool `queryParam:"style=form,explode=true,name=debugOptions.enableDebugging"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GroupResourceName *string `queryParam:"style=form,explode=true,name=groupResourceName"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    UserResourceName *string `queryParam:"style=form,explode=true,name=userResourceName"`
    
}

type CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity struct {
    Option1 *CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1 `security:"option"`
    Option2 *CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2 `security:"option"`
    
}

type CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest struct {
    PathParams CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams 
    QueryParams CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams 
    Security CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity 
    
}

type CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse struct {
    ContentType string 
    ListItemNamesForUnmappedIdentityResponse *shared.ListItemNamesForUnmappedIdentityResponse 
    StatusCode int64 
    
}

