from dataclasses import dataclass, field



@dataclass
class ExtrasCustomFieldChoicesReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasCustomFieldChoicesReadRequest:
    path_params: ExtrasCustomFieldChoicesReadPathParams = field()
    

@dataclass
class ExtrasCustomFieldChoicesReadResponse:
    content_type: str = field()
    status_code: int = field()
    
