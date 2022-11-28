from dataclasses import dataclass, field



@dataclass
class DcimRearPortTemplatesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortTemplatesDeleteRequest:
    path_params: DcimRearPortTemplatesDeletePathParams = field()
    

@dataclass
class DcimRearPortTemplatesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
