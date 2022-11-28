from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DNSManagedZonesGetIamPolicyPathParams:
    resource: str = field(metadata={'path_param': { 'field_name': 'resource', 'style': 'simple', 'explode': False }})
    

@dataclass
class DNSManagedZonesGetIamPolicyQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DNSManagedZonesGetIamPolicySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DNSManagedZonesGetIamPolicySecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DNSManagedZonesGetIamPolicySecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DNSManagedZonesGetIamPolicySecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DNSManagedZonesGetIamPolicySecurity:
    option1: Optional[DNSManagedZonesGetIamPolicySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DNSManagedZonesGetIamPolicySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DNSManagedZonesGetIamPolicySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DNSManagedZonesGetIamPolicySecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DNSManagedZonesGetIamPolicyRequest:
    path_params: DNSManagedZonesGetIamPolicyPathParams = field()
    query_params: DNSManagedZonesGetIamPolicyQueryParams = field()
    security: DNSManagedZonesGetIamPolicySecurity = field()
    request: Optional[shared.GoogleIamV1GetIamPolicyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DNSManagedZonesGetIamPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    google_iam_v1_policy: Optional[shared.GoogleIamV1Policy] = field(default=None)
    
