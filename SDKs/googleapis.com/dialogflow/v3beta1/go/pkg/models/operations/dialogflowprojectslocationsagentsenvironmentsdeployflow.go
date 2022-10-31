package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams struct {
    Environment string `pathParam:"style=simple,explode=false,name=environment"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams struct {
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

type DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest struct {
    PathParams DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams 
    QueryParams DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams 
    Request *shared.GoogleCloudDialogflowCxV3beta1DeployFlowRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity 
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

