package operations

import (
	"openapi/pkg/models/shared"
)

type CloudassetAnalyzeIamPolicyPathParams struct {
	Scope string `pathParam:"style=simple,explode=false,name=scope"`
}

type CloudassetAnalyzeIamPolicyQueryParams struct {
	DollarXgafv                                            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                                            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                                                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	AnalysisQueryAccessSelectorPermissions                 []string          `queryParam:"style=form,explode=true,name=analysisQuery.accessSelector.permissions"`
	AnalysisQueryAccessSelectorRoles                       []string          `queryParam:"style=form,explode=true,name=analysisQuery.accessSelector.roles"`
	AnalysisQueryConditionContextAccessTime                *string           `queryParam:"style=form,explode=true,name=analysisQuery.conditionContext.accessTime"`
	AnalysisQueryIdentitySelectorIdentity                  *string           `queryParam:"style=form,explode=true,name=analysisQuery.identitySelector.identity"`
	AnalysisQueryOptionsAnalyzeServiceAccountImpersonation *bool             `queryParam:"style=form,explode=true,name=analysisQuery.options.analyzeServiceAccountImpersonation"`
	AnalysisQueryOptionsExpandGroups                       *bool             `queryParam:"style=form,explode=true,name=analysisQuery.options.expandGroups"`
	AnalysisQueryOptionsExpandResources                    *bool             `queryParam:"style=form,explode=true,name=analysisQuery.options.expandResources"`
	AnalysisQueryOptionsExpandRoles                        *bool             `queryParam:"style=form,explode=true,name=analysisQuery.options.expandRoles"`
	AnalysisQueryOptionsOutputGroupEdges                   *bool             `queryParam:"style=form,explode=true,name=analysisQuery.options.outputGroupEdges"`
	AnalysisQueryOptionsOutputResourceEdges                *bool             `queryParam:"style=form,explode=true,name=analysisQuery.options.outputResourceEdges"`
	AnalysisQueryResourceSelectorFullResourceName          *string           `queryParam:"style=form,explode=true,name=analysisQuery.resourceSelector.fullResourceName"`
	Callback                                               *string           `queryParam:"style=form,explode=true,name=callback"`
	ExecutionTimeout                                       *string           `queryParam:"style=form,explode=true,name=executionTimeout"`
	Fields                                                 *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                                                    *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                                             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                                            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                                              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	SavedAnalysisQuery                                     *string           `queryParam:"style=form,explode=true,name=savedAnalysisQuery"`
	UploadType                                             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                                         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudassetAnalyzeIamPolicySecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudassetAnalyzeIamPolicyRequest struct {
	PathParams  CloudassetAnalyzeIamPolicyPathParams
	QueryParams CloudassetAnalyzeIamPolicyQueryParams
	Security    CloudassetAnalyzeIamPolicySecurity
}

type CloudassetAnalyzeIamPolicyResponse struct {
	AnalyzeIamPolicyResponse *shared.AnalyzeIamPolicyResponse
	ContentType              string
	StatusCode               int64
}
