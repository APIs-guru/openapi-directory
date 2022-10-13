from dataclasses import dataclass, field



@dataclass
class DeleteTagPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTagHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class DeleteTagRequest:
    path_params: DeleteTagPathParams = field(default=None)
    headers: DeleteTagHeaders = field(default=None)
    

@dataclass
class DeleteTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
