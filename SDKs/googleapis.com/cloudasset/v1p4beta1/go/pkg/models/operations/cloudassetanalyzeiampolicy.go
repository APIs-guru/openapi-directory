package operations

import (
	"openapi/pkg/models/shared"
)

type CloudassetAnalyzeIamPolicyPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudassetAnalyzeIamPolicyQueryParams struct {
	DollarXgafv                                   *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                                   *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                                           *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	AnalysisQueryAccessSelectorPermissions        []string          `queryParam:"style=form,explode=true,name=analysisQuery.accessSelector.permissions"`
	AnalysisQueryAccessSelectorRoles              []string          `queryParam:"style=form,explode=true,name=analysisQuery.accessSelector.roles"`
	AnalysisQueryIdentitySelectorIdentity         *string           `queryParam:"style=form,explode=true,name=analysisQuery.identitySelector.identity"`
	AnalysisQueryResourceSelectorFullResourceName *string           `queryParam:"style=form,explode=true,name=analysisQuery.resourceSelector.fullResourceName"`
	Callback                                      *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                                        *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                                           *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                                    *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OptionsAnalyzeServiceAccountImpersonation     *bool             `queryParam:"style=form,explode=true,name=options.analyzeServiceAccountImpersonation"`
	OptionsExecutionTimeout                       *string           `queryParam:"style=form,explode=true,name=options.executionTimeout"`
	OptionsExpandGroups                           *bool             `queryParam:"style=form,explode=true,name=options.expandGroups"`
	OptionsExpandResources                        *bool             `queryParam:"style=form,explode=true,name=options.expandResources"`
	OptionsExpandRoles                            *bool             `queryParam:"style=form,explode=true,name=options.expandRoles"`
	OptionsOutputGroupEdges                       *bool             `queryParam:"style=form,explode=true,name=options.outputGroupEdges"`
	OptionsOutputResourceEdges                    *bool             `queryParam:"style=form,explode=true,name=options.outputResourceEdges"`
	PrettyPrint                                   *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                                     *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                                    *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                                *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
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
