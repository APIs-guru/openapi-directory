package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListRequest struct {
    PathParams DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListPathParams 
    QueryParams DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListQueryParams 
    Security DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListSecurity 
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListResponse struct {
    ContentType string 
    GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse *shared.GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse 
    StatusCode int64 
    
}

