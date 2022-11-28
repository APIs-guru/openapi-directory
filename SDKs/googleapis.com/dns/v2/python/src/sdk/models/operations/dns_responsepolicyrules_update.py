from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DNSResponsePolicyRulesUpdatePathParams:
    location: str = field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    response_policy: str = field(metadata={'path_param': { 'field_name': 'responsePolicy', 'style': 'simple', 'explode': False }})
    response_policy_rule: str = field(metadata={'path_param': { 'field_name': 'responsePolicyRule', 'style': 'simple', 'explode': False }})
    

@dataclass
class DNSResponsePolicyRulesUpdateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    client_operation_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientOperationId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DNSResponsePolicyRulesUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DNSResponsePolicyRulesUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DNSResponsePolicyRulesUpdateSecurity:
    option1: Optional[DNSResponsePolicyRulesUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DNSResponsePolicyRulesUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DNSResponsePolicyRulesUpdateRequest:
    path_params: DNSResponsePolicyRulesUpdatePathParams = field()
    query_params: DNSResponsePolicyRulesUpdateQueryParams = field()
    security: DNSResponsePolicyRulesUpdateSecurity = field()
    request: Optional[shared.ResponsePolicyRule] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DNSResponsePolicyRulesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    response_policy_rules_update_response: Optional[shared.ResponsePolicyRulesUpdateResponse] = field(default=None)
    
