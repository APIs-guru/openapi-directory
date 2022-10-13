from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceTemplatesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceTemplatesReadRequest:
    path_params: DcimInterfaceTemplatesReadPathParams = field(default=None)
    

@dataclass
class DcimInterfaceTemplatesReadResponse:
    content_type: str = field(default=None)
    interface_template: Optional[shared.InterfaceTemplate] = field(default=None)
    status_code: int = field(default=None)
    
