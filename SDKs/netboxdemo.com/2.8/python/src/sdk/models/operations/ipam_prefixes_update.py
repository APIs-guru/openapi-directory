from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamPrefixesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamPrefixesUpdateRequest:
    path_params: IpamPrefixesUpdatePathParams = field()
    request: shared.WritablePrefixInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamPrefixesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    prefix: Optional[shared.Prefix] = field(default=None)
    
