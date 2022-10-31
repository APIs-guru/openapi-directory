package operations

import (
	"openapi/pkg/models/shared"
)

type IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams struct {
	DollarXgafv                    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter                         *string           `queryParam:"style=form,explode=true,name=filter"`
	FilterParamsCustomFilter       *string           `queryParam:"style=form,explode=true,name=filterParams.customFilter"`
	FilterParamsEndTime            *string           `queryParam:"style=form,explode=true,name=filterParams.endTime"`
	FilterParamsEventStatuses      []string          `queryParam:"style=form,explode=true,name=filterParams.eventStatuses"`
	FilterParamsExecutionID        *string           `queryParam:"style=form,explode=true,name=filterParams.executionId"`
	FilterParamsParameterKey       *string           `queryParam:"style=form,explode=true,name=filterParams.parameterKey"`
	FilterParamsParameterPairKey   *string           `queryParam:"style=form,explode=true,name=filterParams.parameterPairKey"`
	FilterParamsParameterPairValue *string           `queryParam:"style=form,explode=true,name=filterParams.parameterPairValue"`
	FilterParamsParameterType      *string           `queryParam:"style=form,explode=true,name=filterParams.parameterType"`
	FilterParamsParameterValue     *string           `queryParam:"style=form,explode=true,name=filterParams.parameterValue"`
	FilterParamsStartTime          *string           `queryParam:"style=form,explode=true,name=filterParams.startTime"`
	FilterParamsTaskStatuses       []string          `queryParam:"style=form,explode=true,name=filterParams.taskStatuses"`
	FilterParamsTriggerID          *string           `queryParam:"style=form,explode=true,name=filterParams.triggerId"`
	FilterParamsWorkflowName       *string           `queryParam:"style=form,explode=true,name=filterParams.workflowName"`
	Key                            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy                        *string           `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize                       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint                    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadMask                       *string           `queryParam:"style=form,explode=true,name=readMask"`
	RefreshACL                     *bool             `queryParam:"style=form,explode=true,name=refreshAcl"`
	TruncateParams                 *bool             `queryParam:"style=form,explode=true,name=truncateParams"`
	UploadType                     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                 *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest struct {
	PathParams  IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams
	QueryParams IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams
	Security    IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity
}

type IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse struct {
	ContentType                                          string
	GoogleCloudIntegrationsV1alphaListExecutionsResponse *shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse
	StatusCode                                           int64
}
