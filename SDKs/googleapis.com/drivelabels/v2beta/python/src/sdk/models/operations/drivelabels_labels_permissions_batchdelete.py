from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DrivelabelsLabelsPermissionsBatchDeletePathParams:
    labels_id: str = field(default=None, metadata={'path_param': { 'field_name': 'labelsId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DrivelabelsLabelsPermissionsBatchDeleteQueryParams:
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
class DrivelabelsLabelsPermissionsBatchDeleteRequest:
    path_params: DrivelabelsLabelsPermissionsBatchDeletePathParams = field(default=None)
    query_params: DrivelabelsLabelsPermissionsBatchDeleteQueryParams = field(default=None)
    request: Optional[shared.GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DrivelabelsLabelsPermissionsBatchDeleteResponse:
    content_type: str = field(default=None)
    google_protobuf_empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
