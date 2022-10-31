package operations

import (
"openapi/pkg/models/shared")

type ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams struct {
    ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
    HistoryID string `pathParam:"style=simple,explode=false,name=historyId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    StepID string `pathParam:"style=simple,explode=false,name=stepId"`
    
}


type ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum string

const (
    ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnumPerfMetricTypeUnspecified ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum = "perfMetricTypeUnspecified"
ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnumMemory ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum = "memory"
ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnumCPU ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum = "cpu"
ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnumNetwork ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum = "network"
ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnumGraphics ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum = "graphics"
)


type ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter []ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest struct {
    PathParams ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams 
    QueryParams ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams 
    Security ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity 
    
}

type ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse struct {
    ContentType string 
    ListPerfSampleSeriesResponse *shared.ListPerfSampleSeriesResponse 
    StatusCode int64 
    
}

