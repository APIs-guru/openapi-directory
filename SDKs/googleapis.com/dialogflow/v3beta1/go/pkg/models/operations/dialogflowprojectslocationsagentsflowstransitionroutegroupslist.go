package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest struct {
    PathParams DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams 
    QueryParams DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams 
    Security DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity 
    
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse struct {
    ContentType string 
    GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse *shared.GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse 
    StatusCode int64 
    
}

