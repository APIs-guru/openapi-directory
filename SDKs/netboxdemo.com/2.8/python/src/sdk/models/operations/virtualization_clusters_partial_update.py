from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClustersPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClustersPartialUpdateRequest:
    path_params: VirtualizationClustersPartialUpdatePathParams = field()
    request: shared.WritableClusterInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClustersPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    cluster: Optional[shared.Cluster] = field(default=None)
    
