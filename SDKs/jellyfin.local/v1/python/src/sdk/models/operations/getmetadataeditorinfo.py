from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetMetadataEditorInfoPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMetadataEditorInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMetadataEditorInfoRequest:
    path_params: GetMetadataEditorInfoPathParams = field(default=None)
    security: GetMetadataEditorInfoSecurity = field(default=None)
    

@dataclass
class GetMetadataEditorInfoResponse:
    content_type: str = field(default=None)
    metadata_editor_info: Optional[shared.MetadataEditorInfo] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
