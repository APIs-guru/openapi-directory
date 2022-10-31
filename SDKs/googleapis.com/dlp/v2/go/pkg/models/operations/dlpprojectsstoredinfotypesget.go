package operations

import (
"openapi/pkg/models/shared")

type DlpProjectsStoredInfoTypesGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DlpProjectsStoredInfoTypesGetQueryParams struct {
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

type DlpProjectsStoredInfoTypesGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DlpProjectsStoredInfoTypesGetRequest struct {
    PathParams DlpProjectsStoredInfoTypesGetPathParams 
    QueryParams DlpProjectsStoredInfoTypesGetQueryParams 
    Security DlpProjectsStoredInfoTypesGetSecurity 
    
}

type DlpProjectsStoredInfoTypesGetResponse struct {
    ContentType string 
    GooglePrivacyDlpV2StoredInfoType *shared.GooglePrivacyDlpV2StoredInfoType 
    StatusCode int64 
    
}

