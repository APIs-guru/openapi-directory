from dataclasses import dataclass, field



@dataclass
class GetPathwaysWithDiagramsForCategoryUsingGetPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPathwaysWithDiagramsForCategoryUsingGetRequest:
    path_params: GetPathwaysWithDiagramsForCategoryUsingGetPathParams = field(default=None)
    

@dataclass
class GetPathwaysWithDiagramsForCategoryUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
