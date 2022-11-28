from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTopologyMapsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTopologyMapsPartialUpdateRequest:
    path_params: ExtrasTopologyMapsPartialUpdatePathParams = field()
    request: shared.WritableTopologyMapInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasTopologyMapsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    topology_map: Optional[shared.TopologyMap] = field(default=None)
    
