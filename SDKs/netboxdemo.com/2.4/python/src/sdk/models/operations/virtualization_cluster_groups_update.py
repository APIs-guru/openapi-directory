from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterGroupsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterGroupsUpdateRequest:
    path_params: VirtualizationClusterGroupsUpdatePathParams = field()
    request: shared.ClusterGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClusterGroupsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    cluster_group: Optional[shared.ClusterGroup] = field(default=None)
    
