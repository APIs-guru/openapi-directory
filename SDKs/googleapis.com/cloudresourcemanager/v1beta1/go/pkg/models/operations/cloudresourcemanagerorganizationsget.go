package operations

import (
"openapi/pkg/models/shared")

type CloudresourcemanagerOrganizationsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudresourcemanagerOrganizationsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrganizationID *string `queryParam:"style=form,explode=true,name=organizationId"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudresourcemanagerOrganizationsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudresourcemanagerOrganizationsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudresourcemanagerOrganizationsGetSecurity struct {
    Option1 *CloudresourcemanagerOrganizationsGetSecurityOption1 `security:"option"`
    Option2 *CloudresourcemanagerOrganizationsGetSecurityOption2 `security:"option"`
    
}

type CloudresourcemanagerOrganizationsGetRequest struct {
    PathParams CloudresourcemanagerOrganizationsGetPathParams 
    QueryParams CloudresourcemanagerOrganizationsGetQueryParams 
    Security CloudresourcemanagerOrganizationsGetSecurity 
    
}

type CloudresourcemanagerOrganizationsGetResponse struct {
    ContentType string 
    Organization *shared.Organization 
    StatusCode int64 
    
}

