from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetMetadataEditorInfoPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMetadataEditorInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMetadataEditorInfoRequest:
    path_params: GetMetadataEditorInfoPathParams = field()
    security: GetMetadataEditorInfoSecurity = field()
    

@dataclass
class GetMetadataEditorInfoResponse:
    content_type: str = field()
    status_code: int = field()
    metadata_editor_info: Optional[shared.MetadataEditorInfo] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
