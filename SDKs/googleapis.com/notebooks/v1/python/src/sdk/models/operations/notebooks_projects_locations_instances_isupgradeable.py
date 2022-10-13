from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class NotebooksProjectsLocationsInstancesIsUpgradeablePathParams:
    notebook_instance: str = field(default=None, metadata={'path_param': { 'field_name': 'notebookInstance', 'style': 'simple', 'explode': False }})
    
class NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum(str, Enum):
    UPGRADE_TYPE_UNSPECIFIED = "UPGRADE_TYPE_UNSPECIFIED"
    UPGRADE_FRAMEWORK = "UPGRADE_FRAMEWORK"
    UPGRADE_OS = "UPGRADE_OS"
    UPGRADE_CUDA = "UPGRADE_CUDA"
    UPGRADE_ALL = "UPGRADE_ALL"


@dataclass
class NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    type: Optional[NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class NotebooksProjectsLocationsInstancesIsUpgradeableSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class NotebooksProjectsLocationsInstancesIsUpgradeableRequest:
    path_params: NotebooksProjectsLocationsInstancesIsUpgradeablePathParams = field(default=None)
    query_params: NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams = field(default=None)
    security: NotebooksProjectsLocationsInstancesIsUpgradeableSecurity = field(default=None)
    

@dataclass
class NotebooksProjectsLocationsInstancesIsUpgradeableResponse:
    content_type: str = field(default=None)
    is_instance_upgradeable_response: Optional[shared.IsInstanceUpgradeableResponse] = field(default=None)
    status_code: int = field(default=None)
    
