from dataclasses import dataclass, field



@dataclass
class DcimInterfaceTemplatesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceTemplatesDeleteRequest:
    path_params: DcimInterfaceTemplatesDeletePathParams = field()
    

@dataclass
class DcimInterfaceTemplatesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
