package operations

import (
"openapi/pkg/models/shared")

type HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeQueryParams struct {
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

type HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeRequest struct {
    PathParams HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokePathParams 
    QueryParams HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeQueryParams 
    Request *shared.RevokeConsentRequest `request:"mediaType=application/json"`
    Security HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeSecurity 
    
}

type HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeResponse struct {
    Consent *shared.Consent 
    ContentType string 
    StatusCode int64 
    
}

