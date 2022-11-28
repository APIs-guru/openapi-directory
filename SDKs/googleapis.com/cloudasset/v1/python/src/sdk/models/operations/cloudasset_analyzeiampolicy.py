from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CloudassetAnalyzeIamPolicyPathParams:
    scope: str = field(metadata={'path_param': { 'field_name': 'scope', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloudassetAnalyzeIamPolicyQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    analysis_query_access_selector_permissions: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.accessSelector.permissions', 'style': 'form', 'explode': True }})
    analysis_query_access_selector_roles: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.accessSelector.roles', 'style': 'form', 'explode': True }})
    analysis_query_condition_context_access_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.conditionContext.accessTime', 'style': 'form', 'explode': True }})
    analysis_query_identity_selector_identity: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.identitySelector.identity', 'style': 'form', 'explode': True }})
    analysis_query_options_analyze_service_account_impersonation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.options.analyzeServiceAccountImpersonation', 'style': 'form', 'explode': True }})
    analysis_query_options_expand_groups: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.options.expandGroups', 'style': 'form', 'explode': True }})
    analysis_query_options_expand_resources: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.options.expandResources', 'style': 'form', 'explode': True }})
    analysis_query_options_expand_roles: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.options.expandRoles', 'style': 'form', 'explode': True }})
    analysis_query_options_output_group_edges: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.options.outputGroupEdges', 'style': 'form', 'explode': True }})
    analysis_query_options_output_resource_edges: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.options.outputResourceEdges', 'style': 'form', 'explode': True }})
    analysis_query_resource_selector_full_resource_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'analysisQuery.resourceSelector.fullResourceName', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    execution_timeout: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'executionTimeout', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    saved_analysis_query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'savedAnalysisQuery', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudassetAnalyzeIamPolicySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudassetAnalyzeIamPolicyRequest:
    path_params: CloudassetAnalyzeIamPolicyPathParams = field()
    query_params: CloudassetAnalyzeIamPolicyQueryParams = field()
    security: CloudassetAnalyzeIamPolicySecurity = field()
    

@dataclass
class CloudassetAnalyzeIamPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    analyze_iam_policy_response: Optional[shared.AnalyzeIamPolicyResponse] = field(default=None)
    
