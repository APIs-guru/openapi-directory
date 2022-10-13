from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum(str, Enum):
    MIGRATING_VM_VIEW_UNSPECIFIED = "MIGRATING_VM_VIEW_UNSPECIFIED"
    MIGRATING_VM_VIEW_BASIC = "MIGRATING_VM_VIEW_BASIC"
    MIGRATING_VM_VIEW_FULL = "MIGRATING_VM_VIEW_FULL"


@dataclass
class VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class VmmigrationProjectsLocationsSourcesMigratingVmsListRequest:
    path_params: VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams = field(default=None)
    query_params: VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams = field(default=None)
    security: VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity = field(default=None)
    

@dataclass
class VmmigrationProjectsLocationsSourcesMigratingVmsListResponse:
    content_type: str = field(default=None)
    list_migrating_vms_response: Optional[shared.ListMigratingVmsResponse] = field(default=None)
    status_code: int = field(default=None)
    
