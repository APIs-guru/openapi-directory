package operations

import (
"openapi/pkg/models/shared")

type SecuritycenterOrganizationsSourcesFindingsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type SecuritycenterOrganizationsSourcesFindingsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    FindingID *string `queryParam:"style=form,explode=true,name=findingId"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SecuritycenterOrganizationsSourcesFindingsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SecuritycenterOrganizationsSourcesFindingsCreateRequest struct {
    PathParams SecuritycenterOrganizationsSourcesFindingsCreatePathParams 
    QueryParams SecuritycenterOrganizationsSourcesFindingsCreateQueryParams 
    Request *shared.Finding `request:"mediaType=application/json"`
    Security SecuritycenterOrganizationsSourcesFindingsCreateSecurity 
    
}

type SecuritycenterOrganizationsSourcesFindingsCreateResponse struct {
    ContentType string 
    Finding *shared.Finding 
    StatusCode int64 
    
}

