from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimSitesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimSitesUpdateRequest:
    path_params: DcimSitesUpdatePathParams = field()
    request: shared.WritableSiteInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimSitesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    site: Optional[shared.Site] = field(default=None)
    
