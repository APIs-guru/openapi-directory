from dataclasses import dataclass, field
from typing import List


@dataclass
class DeleteImageRegionsPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImageRegionsQueryParams:
    region_ids: List[str] = field(metadata={'query_param': { 'field_name': 'regionIds', 'style': 'form', 'explode': False }})
    

@dataclass
class DeleteImageRegionsHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImageRegionsRequest:
    headers: DeleteImageRegionsHeaders = field()
    path_params: DeleteImageRegionsPathParams = field()
    query_params: DeleteImageRegionsQueryParams = field()
    

@dataclass
class DeleteImageRegionsResponse:
    content_type: str = field()
    status_code: int = field()
    
