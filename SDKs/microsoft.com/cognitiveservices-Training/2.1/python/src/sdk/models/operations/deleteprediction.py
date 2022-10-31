from dataclasses import dataclass, field
from typing import List


@dataclass
class DeletePredictionPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePredictionQueryParams:
    ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclass
class DeletePredictionHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePredictionRequest:
    path_params: DeletePredictionPathParams = field(default=None)
    query_params: DeletePredictionQueryParams = field(default=None)
    headers: DeletePredictionHeaders = field(default=None)
    

@dataclass
class DeletePredictionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
