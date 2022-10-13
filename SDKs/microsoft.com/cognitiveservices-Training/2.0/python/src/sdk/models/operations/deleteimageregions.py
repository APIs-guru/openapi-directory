from dataclasses import dataclass, field
from typing import List


@dataclass
class DeleteImageRegionsPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteImageRegionsQueryParams:
    region_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionIds', 'style': 'form', 'explode': False }})
    

@dataclass
class DeleteImageRegionsHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class DeleteImageRegionsRequest:
    path_params: DeleteImageRegionsPathParams = field(default=None)
    query_params: DeleteImageRegionsQueryParams = field(default=None)
    headers: DeleteImageRegionsHeaders = field(default=None)
    

@dataclass
class DeleteImageRegionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
