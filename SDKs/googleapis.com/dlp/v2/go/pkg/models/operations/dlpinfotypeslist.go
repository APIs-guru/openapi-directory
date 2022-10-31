package operations

import (
"openapi/pkg/models/shared")

type DlpInfoTypesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Parent *string `queryParam:"style=form,explode=true,name=parent"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DlpInfoTypesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DlpInfoTypesListRequest struct {
    QueryParams DlpInfoTypesListQueryParams 
    Security DlpInfoTypesListSecurity 
    
}

type DlpInfoTypesListResponse struct {
    ContentType string 
    GooglePrivacyDlpV2ListInfoTypesResponse *shared.GooglePrivacyDlpV2ListInfoTypesResponse 
    StatusCode int64 
    
}

