package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams struct {
    Agent string `pathParam:"style=simple,explode=false,name=agent"`
    
}


type DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum string

const (
    DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnumCoverageTypeUnspecified DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum = "COVERAGE_TYPE_UNSPECIFIED"
DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnumIntent DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum = "INTENT"
DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnumPageTransition DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum = "PAGE_TRANSITION"
DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnumTransitionRouteGroup DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum = "TRANSITION_ROUTE_GROUP"
)


type DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Type *DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum `queryParam:"style=form,explode=true,name=type"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest struct {
    PathParams DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams 
    QueryParams DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams 
    Security DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity 
    
}

type DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse struct {
    ContentType string 
    GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse *shared.GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse 
    StatusCode int64 
    
}

