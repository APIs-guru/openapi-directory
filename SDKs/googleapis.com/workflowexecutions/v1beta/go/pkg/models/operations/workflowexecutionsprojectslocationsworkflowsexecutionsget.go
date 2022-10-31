package operations

import (
"openapi/pkg/models/shared")

type WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum string

const (
    WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnumExecutionViewUnspecified WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum = "EXECUTION_VIEW_UNSPECIFIED"
WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnumBasic WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum = "BASIC"
WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnumFull WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum = "FULL"
)


type WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams struct {
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
    View *WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest struct {
    PathParams WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetPathParams 
    QueryParams WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetQueryParams 
    Security WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity 
    
}

type WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse struct {
    ContentType string 
    Execution *shared.Execution 
    StatusCode int64 
    
}

