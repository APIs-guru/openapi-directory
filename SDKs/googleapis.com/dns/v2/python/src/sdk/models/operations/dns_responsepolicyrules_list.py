from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class DNSResponsePolicyRulesListPathParams:
    location: str = field(default=None, metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    response_policy: str = field(default=None, metadata={'path_param': { 'field_name': 'responsePolicy', 'style': 'simple', 'explode': False }})
    

@dataclass
class DNSResponsePolicyRulesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DNSResponsePolicyRulesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DNSResponsePolicyRulesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DNSResponsePolicyRulesListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DNSResponsePolicyRulesListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DNSResponsePolicyRulesListSecurity:
    option1: Optional[DNSResponsePolicyRulesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DNSResponsePolicyRulesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DNSResponsePolicyRulesListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DNSResponsePolicyRulesListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DNSResponsePolicyRulesListRequest:
    path_params: DNSResponsePolicyRulesListPathParams = field(default=None)
    query_params: DNSResponsePolicyRulesListQueryParams = field(default=None)
    security: DNSResponsePolicyRulesListSecurity = field(default=None)
    

@dataclass
class DNSResponsePolicyRulesListResponse:
    content_type: str = field(default=None)
    response_policy_rules_list_response: Optional[shared.ResponsePolicyRulesListResponse] = field(default=None)
    status_code: int = field(default=None)
    
