from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateANumberRequest:
    request: shared.NumberDetailsUpdate = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateANumberResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    unauthorized: Optional[shared.Unauthorized] = field(default=None)
    
