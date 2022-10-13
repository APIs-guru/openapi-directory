from dataclasses import dataclass, field



@dataclass
class ExtrasCustomFieldChoicesReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasCustomFieldChoicesReadRequest:
    path_params: ExtrasCustomFieldChoicesReadPathParams = field(default=None)
    

@dataclass
class ExtrasCustomFieldChoicesReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
