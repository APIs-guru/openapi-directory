from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIPartPartNumberPathParams:
    part_number: int = field(metadata={'path_param': { 'field_name': 'partNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPartPartNumberRequest:
    path_params: GetAPIPartPartNumberPathParams = field()
    

@dataclass
class GetAPIPartPartNumberResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    erskine_may_part: Optional[shared.ErskineMayPart] = field(default=None)
    
