from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPathwaysWithDiagramsForCategoryUsingGetPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPathwaysWithDiagramsForCategoryUsingGetRequest:
    path_params: GetPathwaysWithDiagramsForCategoryUsingGetPathParams = field()
    

@dataclass
class GetPathwaysWithDiagramsForCategoryUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
