from dataclasses import dataclass, field



@dataclass
class DeleteSeriesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSeriesIDRequest:
    path_params: DeleteSeriesIDPathParams = field(default=None)
    

@dataclass
class DeleteSeriesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
