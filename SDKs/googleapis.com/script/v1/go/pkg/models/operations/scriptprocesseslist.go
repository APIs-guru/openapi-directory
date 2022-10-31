package operations

import (
"openapi/pkg/models/shared")


type ScriptProcessesListUserProcessFilterStatusesEnum string

const (
    ScriptProcessesListUserProcessFilterStatusesEnumProcessStatusUnspecified ScriptProcessesListUserProcessFilterStatusesEnum = "PROCESS_STATUS_UNSPECIFIED"
ScriptProcessesListUserProcessFilterStatusesEnumRunning ScriptProcessesListUserProcessFilterStatusesEnum = "RUNNING"
ScriptProcessesListUserProcessFilterStatusesEnumPaused ScriptProcessesListUserProcessFilterStatusesEnum = "PAUSED"
ScriptProcessesListUserProcessFilterStatusesEnumCompleted ScriptProcessesListUserProcessFilterStatusesEnum = "COMPLETED"
ScriptProcessesListUserProcessFilterStatusesEnumCanceled ScriptProcessesListUserProcessFilterStatusesEnum = "CANCELED"
ScriptProcessesListUserProcessFilterStatusesEnumFailed ScriptProcessesListUserProcessFilterStatusesEnum = "FAILED"
ScriptProcessesListUserProcessFilterStatusesEnumTimedOut ScriptProcessesListUserProcessFilterStatusesEnum = "TIMED_OUT"
ScriptProcessesListUserProcessFilterStatusesEnumUnknown ScriptProcessesListUserProcessFilterStatusesEnum = "UNKNOWN"
ScriptProcessesListUserProcessFilterStatusesEnumDelayed ScriptProcessesListUserProcessFilterStatusesEnum = "DELAYED"
)



type ScriptProcessesListUserProcessFilterTypesEnum string

const (
    ScriptProcessesListUserProcessFilterTypesEnumProcessTypeUnspecified ScriptProcessesListUserProcessFilterTypesEnum = "PROCESS_TYPE_UNSPECIFIED"
ScriptProcessesListUserProcessFilterTypesEnumAddOn ScriptProcessesListUserProcessFilterTypesEnum = "ADD_ON"
ScriptProcessesListUserProcessFilterTypesEnumExecutionAPI ScriptProcessesListUserProcessFilterTypesEnum = "EXECUTION_API"
ScriptProcessesListUserProcessFilterTypesEnumTimeDriven ScriptProcessesListUserProcessFilterTypesEnum = "TIME_DRIVEN"
ScriptProcessesListUserProcessFilterTypesEnumTrigger ScriptProcessesListUserProcessFilterTypesEnum = "TRIGGER"
ScriptProcessesListUserProcessFilterTypesEnumWebapp ScriptProcessesListUserProcessFilterTypesEnum = "WEBAPP"
ScriptProcessesListUserProcessFilterTypesEnumEditor ScriptProcessesListUserProcessFilterTypesEnum = "EDITOR"
ScriptProcessesListUserProcessFilterTypesEnumSimpleTrigger ScriptProcessesListUserProcessFilterTypesEnum = "SIMPLE_TRIGGER"
ScriptProcessesListUserProcessFilterTypesEnumMenu ScriptProcessesListUserProcessFilterTypesEnum = "MENU"
ScriptProcessesListUserProcessFilterTypesEnumBatchTask ScriptProcessesListUserProcessFilterTypesEnum = "BATCH_TASK"
)



type ScriptProcessesListUserProcessFilterUserAccessLevelsEnum string

const (
    ScriptProcessesListUserProcessFilterUserAccessLevelsEnumUserAccessLevelUnspecified ScriptProcessesListUserProcessFilterUserAccessLevelsEnum = "USER_ACCESS_LEVEL_UNSPECIFIED"
ScriptProcessesListUserProcessFilterUserAccessLevelsEnumNone ScriptProcessesListUserProcessFilterUserAccessLevelsEnum = "NONE"
ScriptProcessesListUserProcessFilterUserAccessLevelsEnumRead ScriptProcessesListUserProcessFilterUserAccessLevelsEnum = "READ"
ScriptProcessesListUserProcessFilterUserAccessLevelsEnumWrite ScriptProcessesListUserProcessFilterUserAccessLevelsEnum = "WRITE"
ScriptProcessesListUserProcessFilterUserAccessLevelsEnumOwner ScriptProcessesListUserProcessFilterUserAccessLevelsEnum = "OWNER"
)


type ScriptProcessesListQueryParams struct {
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
    UserProcessFilterDeploymentID *string `queryParam:"style=form,explode=true,name=userProcessFilter.deploymentId"`
    UserProcessFilterEndTime *string `queryParam:"style=form,explode=true,name=userProcessFilter.endTime"`
    UserProcessFilterFunctionName *string `queryParam:"style=form,explode=true,name=userProcessFilter.functionName"`
    UserProcessFilterProjectName *string `queryParam:"style=form,explode=true,name=userProcessFilter.projectName"`
    UserProcessFilterScriptID *string `queryParam:"style=form,explode=true,name=userProcessFilter.scriptId"`
    UserProcessFilterStartTime *string `queryParam:"style=form,explode=true,name=userProcessFilter.startTime"`
    UserProcessFilterStatuses []ScriptProcessesListUserProcessFilterStatusesEnum `queryParam:"style=form,explode=true,name=userProcessFilter.statuses"`
    UserProcessFilterTypes []ScriptProcessesListUserProcessFilterTypesEnum `queryParam:"style=form,explode=true,name=userProcessFilter.types"`
    UserProcessFilterUserAccessLevels []ScriptProcessesListUserProcessFilterUserAccessLevelsEnum `queryParam:"style=form,explode=true,name=userProcessFilter.userAccessLevels"`
    
}

type ScriptProcessesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ScriptProcessesListRequest struct {
    QueryParams ScriptProcessesListQueryParams 
    Security ScriptProcessesListSecurity 
    
}

type ScriptProcessesListResponse struct {
    ContentType string 
    ListUserProcessesResponse *shared.ListUserProcessesResponse 
    StatusCode int64 
    
}

