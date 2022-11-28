from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ResultsReadPathParams:
    result_file_id: str = field(metadata={'path_param': { 'field_name': 'result_file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResultsReadRequest:
    path_params: ResultsReadPathParams = field()
    

@dataclass
class ResultsReadResponse:
    content_type: str = field()
    status_code: int = field()
    result_response: Optional[shared.ResultResponse] = field(default=None)
    
