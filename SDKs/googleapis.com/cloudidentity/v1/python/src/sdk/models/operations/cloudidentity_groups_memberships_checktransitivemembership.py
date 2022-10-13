from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity:
    option1: Optional[CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest:
    path_params: CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams = field(default=None)
    query_params: CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams = field(default=None)
    security: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity = field(default=None)
    

@dataclass
class CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse:
    check_transitive_membership_response: Optional[shared.CheckTransitiveMembershipResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
