from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetImageRegionProposalsPathParams:
    image_id: str = field(metadata={'path_param': { 'field_name': 'imageId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImageRegionProposalsHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImageRegionProposalsRequest:
    headers: GetImageRegionProposalsHeaders = field()
    path_params: GetImageRegionProposalsPathParams = field()
    

@dataclass
class GetImageRegionProposalsResponse:
    content_type: str = field()
    status_code: int = field()
    image_region_proposal: Optional[shared.ImageRegionProposal] = field(default=None)
    
