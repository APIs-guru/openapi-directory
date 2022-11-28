from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamAggregatesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamAggregatesUpdateRequest:
    path_params: IpamAggregatesUpdatePathParams = field()
    request: shared.WritableAggregateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamAggregatesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    aggregate: Optional[shared.Aggregate] = field(default=None)
    
