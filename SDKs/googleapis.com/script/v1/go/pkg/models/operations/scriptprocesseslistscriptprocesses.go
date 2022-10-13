package operations

import (
	"openapi/pkg/models/shared"
)

type ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum string

const (
	ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumProcessStatusUnspecified ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum = "PROCESS_STATUS_UNSPECIFIED"
	ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumRunning                  ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum = "RUNNING"
	ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumPaused                   ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum = "PAUSED"
	ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumCompleted                ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum = "COMPLETED"
	ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumCanceled                 ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum = "CANCELED"
	ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumFailed                   ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum = "FAILED"
	ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumTimedOut                 ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum = "TIMED_OUT"
	ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumUnknown                  ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum = "UNKNOWN"
	ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnumDelayed                  ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum = "DELAYED"
)

type ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum string

const (
	ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumProcessTypeUnspecified ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = "PROCESS_TYPE_UNSPECIFIED"
	ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumAddOn                  ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = "ADD_ON"
	ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumExecutionAPI           ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = "EXECUTION_API"
	ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumTimeDriven             ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = "TIME_DRIVEN"
	ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumTrigger                ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = "TRIGGER"
	ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumWebapp                 ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = "WEBAPP"
	ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumEditor                 ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = "EDITOR"
	ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumSimpleTrigger          ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = "SIMPLE_TRIGGER"
	ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumMenu                   ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = "MENU"
	ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnumBatchTask              ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = "BATCH_TASK"
)

type ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum string

const (
	ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnumUserAccessLevelUnspecified ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum = "USER_ACCESS_LEVEL_UNSPECIFIED"
	ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnumNone                       ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum = "NONE"
	ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnumRead                       ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum = "READ"
	ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnumWrite                      ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum = "WRITE"
	ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnumOwner                      ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum = "OWNER"
)

type ScriptProcessesListScriptProcessesQueryParams struct {
	DollarXgafv                         *shared.XgafvEnum                                                           `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                         *string                                                                     `queryParam:"style=form,explode=true,name=access_token"`
	Alt                                 *shared.AltEnum                                                             `queryParam:"style=form,explode=true,name=alt"`
	Callback                            *string                                                                     `queryParam:"style=form,explode=true,name=callback"`
	Fields                              *string                                                                     `queryParam:"style=form,explode=true,name=fields"`
	Key                                 *string                                                                     `queryParam:"style=form,explode=true,name=key"`
	OauthToken                          *string                                                                     `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize                            *int64                                                                      `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                           *string                                                                     `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint                         *bool                                                                       `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                           *string                                                                     `queryParam:"style=form,explode=true,name=quotaUser"`
	ScriptID                            *string                                                                     `queryParam:"style=form,explode=true,name=scriptId"`
	ScriptProcessFilterDeploymentID     *string                                                                     `queryParam:"style=form,explode=true,name=scriptProcessFilter.deploymentId"`
	ScriptProcessFilterEndTime          *string                                                                     `queryParam:"style=form,explode=true,name=scriptProcessFilter.endTime"`
	ScriptProcessFilterFunctionName     *string                                                                     `queryParam:"style=form,explode=true,name=scriptProcessFilter.functionName"`
	ScriptProcessFilterStartTime        *string                                                                     `queryParam:"style=form,explode=true,name=scriptProcessFilter.startTime"`
	ScriptProcessFilterStatuses         []ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum         `queryParam:"style=form,explode=true,name=scriptProcessFilter.statuses"`
	ScriptProcessFilterTypes            []ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum            `queryParam:"style=form,explode=true,name=scriptProcessFilter.types"`
	ScriptProcessFilterUserAccessLevels []ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum `queryParam:"style=form,explode=true,name=scriptProcessFilter.userAccessLevels"`
	UploadType                          *string                                                                     `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                      *string                                                                     `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ScriptProcessesListScriptProcessesSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ScriptProcessesListScriptProcessesRequest struct {
	QueryParams ScriptProcessesListScriptProcessesQueryParams
	Security    ScriptProcessesListScriptProcessesSecurity
}

type ScriptProcessesListScriptProcessesResponse struct {
	ContentType                 string
	ListScriptProcessesResponse *shared.ListScriptProcessesResponse
	StatusCode                  int64
}
