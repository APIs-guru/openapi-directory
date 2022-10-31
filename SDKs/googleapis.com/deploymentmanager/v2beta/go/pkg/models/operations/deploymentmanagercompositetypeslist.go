package operations

import (
"openapi/pkg/models/shared")

type DeploymentmanagerCompositeTypesListPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DeploymentmanagerCompositeTypesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DeploymentmanagerCompositeTypesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerCompositeTypesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerCompositeTypesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerCompositeTypesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerCompositeTypesListSecurity struct {
    Option1 *DeploymentmanagerCompositeTypesListSecurityOption1 `security:"option"`
    Option2 *DeploymentmanagerCompositeTypesListSecurityOption2 `security:"option"`
    Option3 *DeploymentmanagerCompositeTypesListSecurityOption3 `security:"option"`
    Option4 *DeploymentmanagerCompositeTypesListSecurityOption4 `security:"option"`
    
}

type DeploymentmanagerCompositeTypesListRequest struct {
    PathParams DeploymentmanagerCompositeTypesListPathParams 
    QueryParams DeploymentmanagerCompositeTypesListQueryParams 
    Security DeploymentmanagerCompositeTypesListSecurity 
    
}

type DeploymentmanagerCompositeTypesListResponse struct {
    CompositeTypesListResponse *shared.CompositeTypesListResponse 
    ContentType string 
    StatusCode int64 
    
}

