from dataclasses import dataclass, field



@dataclass
class DcimInterfaceTemplatesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceTemplatesDeleteRequest:
    path_params: DcimInterfaceTemplatesDeletePathParams = field(default=None)
    

@dataclass
class DcimInterfaceTemplatesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
