package operations

import (
"openapi/pkg/models/shared")

type HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AttributeDefinitionID *string `queryParam:"style=form,explode=true,name=attributeDefinitionId"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateRequest struct {
    PathParams HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreatePathParams 
    QueryParams HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateQueryParams 
    Request *shared.AttributeDefinition `request:"mediaType=application/json"`
    Security HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateSecurity 
    
}

type HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateResponse struct {
    AttributeDefinition *shared.AttributeDefinition 
    ContentType string 
    StatusCode int64 
    
}

