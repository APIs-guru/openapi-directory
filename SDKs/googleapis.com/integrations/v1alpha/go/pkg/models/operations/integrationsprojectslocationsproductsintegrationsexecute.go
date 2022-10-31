package operations

import (
"openapi/pkg/models/shared")

type IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams struct {
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

type IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest struct {
    PathParams IntegrationsProjectsLocationsProductsIntegrationsExecutePathParams 
    QueryParams IntegrationsProjectsLocationsProductsIntegrationsExecuteQueryParams 
    Request *shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest `request:"mediaType=application/json"`
    Security IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity 
    
}

type IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse struct {
    ContentType string 
    GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse *shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse 
    StatusCode int64 
    
}

