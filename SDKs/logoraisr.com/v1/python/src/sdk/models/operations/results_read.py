from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ResultsReadPathParams:
    result_file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'result_file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResultsReadRequest:
    path_params: ResultsReadPathParams = field(default=None)
    

@dataclass
class ResultsReadResponse:
    content_type: str = field(default=None)
    result_response: Optional[shared.ResultResponse] = field(default=None)
    status_code: int = field(default=None)
    
