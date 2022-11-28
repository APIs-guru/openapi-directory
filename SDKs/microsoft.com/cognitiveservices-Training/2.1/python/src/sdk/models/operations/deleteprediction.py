from dataclasses import dataclass, field
from typing import List


@dataclass
class DeletePredictionPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePredictionQueryParams:
    ids: List[str] = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclass
class DeletePredictionHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePredictionRequest:
    headers: DeletePredictionHeaders = field()
    path_params: DeletePredictionPathParams = field()
    query_params: DeletePredictionQueryParams = field()
    

@dataclass
class DeletePredictionResponse:
    content_type: str = field()
    status_code: int = field()
    
