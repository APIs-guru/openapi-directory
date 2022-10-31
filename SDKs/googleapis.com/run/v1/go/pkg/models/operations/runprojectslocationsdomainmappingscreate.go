package operations

import (
"openapi/pkg/models/shared")

type RunProjectsLocationsDomainmappingsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type RunProjectsLocationsDomainmappingsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DryRun *string `queryParam:"style=form,explode=true,name=dryRun"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type RunProjectsLocationsDomainmappingsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RunProjectsLocationsDomainmappingsCreateRequest struct {
    PathParams RunProjectsLocationsDomainmappingsCreatePathParams 
    QueryParams RunProjectsLocationsDomainmappingsCreateQueryParams 
    Request *shared.DomainMapping `request:"mediaType=application/json"`
    Security RunProjectsLocationsDomainmappingsCreateSecurity 
    
}

type RunProjectsLocationsDomainmappingsCreateResponse struct {
    ContentType string 
    DomainMapping *shared.DomainMapping 
    StatusCode int64 
    
}

