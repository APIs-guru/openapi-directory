from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfaceTemplatesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceTemplatesReadRequest:
    path_params: DcimInterfaceTemplatesReadPathParams = field()
    

@dataclass
class DcimInterfaceTemplatesReadResponse:
    content_type: str = field()
    status_code: int = field()
    interface_template: Optional[shared.InterfaceTemplate] = field(default=None)
    
