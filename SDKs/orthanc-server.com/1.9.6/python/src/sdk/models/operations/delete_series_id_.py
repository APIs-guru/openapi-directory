from dataclasses import dataclass, field



@dataclass
class DeleteSeriesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSeriesIDRequest:
    path_params: DeleteSeriesIDPathParams = field()
    

@dataclass
class DeleteSeriesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
