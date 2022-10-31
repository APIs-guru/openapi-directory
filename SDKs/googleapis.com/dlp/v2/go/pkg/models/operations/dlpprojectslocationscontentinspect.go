package operations

import (
"openapi/pkg/models/shared")

type DlpProjectsLocationsContentInspectPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DlpProjectsLocationsContentInspectQueryParams struct {
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

type DlpProjectsLocationsContentInspectSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DlpProjectsLocationsContentInspectRequest struct {
    PathParams DlpProjectsLocationsContentInspectPathParams 
    QueryParams DlpProjectsLocationsContentInspectQueryParams 
    Request *shared.GooglePrivacyDlpV2InspectContentRequest `request:"mediaType=application/json"`
    Security DlpProjectsLocationsContentInspectSecurity 
    
}

type DlpProjectsLocationsContentInspectResponse struct {
    ContentType string 
    GooglePrivacyDlpV2InspectContentResponse *shared.GooglePrivacyDlpV2InspectContentResponse 
    StatusCode int64 
    
}

