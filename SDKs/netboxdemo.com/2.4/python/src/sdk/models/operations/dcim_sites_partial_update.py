from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimSitesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimSitesPartialUpdateRequest:
    path_params: DcimSitesPartialUpdatePathParams = field()
    request: shared.WritableSiteInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimSitesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    site: Optional[shared.Site] = field(default=None)
    
