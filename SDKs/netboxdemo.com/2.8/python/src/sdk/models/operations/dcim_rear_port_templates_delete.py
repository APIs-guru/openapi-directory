from dataclasses import dataclass, field



@dataclass
class DcimRearPortTemplatesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRearPortTemplatesDeleteRequest:
    path_params: DcimRearPortTemplatesDeletePathParams = field(default=None)
    

@dataclass
class DcimRearPortTemplatesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
