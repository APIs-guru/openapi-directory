package operations

import (
"openapi/pkg/models/shared")

type CloudsearchSettingsDatasourcesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DebugOptionsEnableDebugging *bool `queryParam:"style=form,explode=true,name=debugOptions.enableDebugging"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudsearchSettingsDatasourcesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchSettingsDatasourcesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchSettingsDatasourcesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchSettingsDatasourcesListSecurity struct {
    Option1 *CloudsearchSettingsDatasourcesListSecurityOption1 `security:"option"`
    Option2 *CloudsearchSettingsDatasourcesListSecurityOption2 `security:"option"`
    Option3 *CloudsearchSettingsDatasourcesListSecurityOption3 `security:"option"`
    
}

type CloudsearchSettingsDatasourcesListRequest struct {
    QueryParams CloudsearchSettingsDatasourcesListQueryParams 
    Security CloudsearchSettingsDatasourcesListSecurity 
    
}

type CloudsearchSettingsDatasourcesListResponse struct {
    ContentType string 
    ListDataSourceResponse *shared.ListDataSourceResponse 
    StatusCode int64 
    
}

