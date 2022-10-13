from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    debug_options_enable_debugging: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'debugOptions.enableDebugging', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    group_resource_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupResourceName', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    user_resource_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userResourceName', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity:
    option1: Optional[CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest:
    path_params: CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams = field(default=None)
    query_params: CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams = field(default=None)
    security: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity = field(default=None)
    

@dataclass
class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse:
    content_type: str = field(default=None)
    list_item_names_for_unmapped_identity_response: Optional[shared.ListItemNamesForUnmappedIdentityResponse] = field(default=None)
    status_code: int = field(default=None)
    
