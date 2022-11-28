from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterTypesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterTypesPartialUpdateRequest:
    path_params: VirtualizationClusterTypesPartialUpdatePathParams = field()
    request: shared.ClusterTypeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClusterTypesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    cluster_type: Optional[shared.ClusterType] = field(default=None)
    
