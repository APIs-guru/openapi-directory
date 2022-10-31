package operations

import (
"openapi/pkg/models/shared")

type VisionProjectsLocationsProductSetsImportPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type VisionProjectsLocationsProductSetsImportQueryParams struct {
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

type VisionProjectsLocationsProductSetsImportSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VisionProjectsLocationsProductSetsImportSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type VisionProjectsLocationsProductSetsImportSecurity struct {
    Option1 *VisionProjectsLocationsProductSetsImportSecurityOption1 `security:"option"`
    Option2 *VisionProjectsLocationsProductSetsImportSecurityOption2 `security:"option"`
    
}

type VisionProjectsLocationsProductSetsImportRequest struct {
    PathParams VisionProjectsLocationsProductSetsImportPathParams 
    QueryParams VisionProjectsLocationsProductSetsImportQueryParams 
    Request *shared.ImportProductSetsRequest `request:"mediaType=application/json"`
    Security VisionProjectsLocationsProductSetsImportSecurity 
    
}

type VisionProjectsLocationsProductSetsImportResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

