from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSnowMonkeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSnowMonkeyRequest:
    security: UpdateSnowMonkeySecurity = field()
    request: Optional[shared.Group] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSnowMonkeyResponse:
    content_type: str = field()
    status_code: int = field()
    snow_monkey_config: Optional[shared.SnowMonkeyConfig] = field(default=None)
    
