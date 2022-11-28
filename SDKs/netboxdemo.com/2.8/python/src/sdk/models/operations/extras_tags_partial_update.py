from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTagsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTagsPartialUpdateRequest:
    path_params: ExtrasTagsPartialUpdatePathParams = field()
    request: shared.TagInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasTagsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    tag: Optional[shared.Tag] = field(default=None)
    
