from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceTemplatesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceTemplatesUpdateRequest:
    path_params: DcimInterfaceTemplatesUpdatePathParams = field(default=None)
    request: shared.WritableInterfaceTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfaceTemplatesUpdateResponse:
    content_type: str = field(default=None)
    interface_template: Optional[shared.InterfaceTemplate] = field(default=None)
    status_code: int = field(default=None)
    
