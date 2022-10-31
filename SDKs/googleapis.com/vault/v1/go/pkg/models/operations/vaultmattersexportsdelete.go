package operations

import (
"openapi/pkg/models/shared")

type VaultMattersExportsDeletePathParams struct {
    ExportID string `pathParam:"style=simple,explode=false,name=exportId"`
    MatterID string `pathParam:"style=simple,explode=false,name=matterId"`
    
}

type VaultMattersExportsDeleteQueryParams struct {
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

type VaultMattersExportsDeleteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VaultMattersExportsDeleteRequest struct {
    PathParams VaultMattersExportsDeletePathParams 
    QueryParams VaultMattersExportsDeleteQueryParams 
    Security VaultMattersExportsDeleteSecurity 
    
}

type VaultMattersExportsDeleteResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

