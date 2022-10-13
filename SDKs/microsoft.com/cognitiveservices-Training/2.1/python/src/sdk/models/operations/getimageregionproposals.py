from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetImageRegionProposalsPathParams:
    image_id: str = field(default=None, metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImageRegionProposalsHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class GetImageRegionProposalsRequest:
    path_params: GetImageRegionProposalsPathParams = field(default=None)
    headers: GetImageRegionProposalsHeaders = field(default=None)
    

@dataclass
class GetImageRegionProposalsResponse:
    content_type: str = field(default=None)
    image_region_proposal: Optional[shared.ImageRegionProposal] = field(default=None)
    status_code: int = field(default=None)
    
