from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIPartPartNumberPathParams:
    part_number: int = field(default=None, metadata={'path_param': { 'field_name': 'partNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPartPartNumberRequest:
    path_params: GetAPIPartPartNumberPathParams = field(default=None)
    

@dataclass
class GetAPIPartPartNumberResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erskine_may_part: Optional[shared.ErskineMayPart] = field(default=None)
    status_code: int = field(default=None)
    
