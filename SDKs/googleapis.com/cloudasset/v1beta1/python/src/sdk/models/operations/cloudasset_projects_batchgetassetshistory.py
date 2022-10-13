from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CloudassetProjectsBatchGetAssetsHistoryPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    RESOURCE = "RESOURCE"
    IAM_POLICY = "IAM_POLICY"


@dataclass
class CloudassetProjectsBatchGetAssetsHistoryQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    asset_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'assetNames', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    content_type: Optional[CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'contentType', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    read_time_window_end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'readTimeWindow.endTime', 'style': 'form', 'explode': True }})
    read_time_window_start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'readTimeWindow.startTime', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudassetProjectsBatchGetAssetsHistorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudassetProjectsBatchGetAssetsHistoryRequest:
    path_params: CloudassetProjectsBatchGetAssetsHistoryPathParams = field(default=None)
    query_params: CloudassetProjectsBatchGetAssetsHistoryQueryParams = field(default=None)
    security: CloudassetProjectsBatchGetAssetsHistorySecurity = field(default=None)
    

@dataclass
class CloudassetProjectsBatchGetAssetsHistoryResponse:
    batch_get_assets_history_response: Optional[shared.BatchGetAssetsHistoryResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
