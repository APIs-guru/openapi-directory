from dataclasses import dataclass, field



@dataclass
class DeleteTagPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTagHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTagRequest:
    headers: DeleteTagHeaders = field()
    path_params: DeleteTagPathParams = field()
    

@dataclass
class DeleteTagResponse:
    content_type: str = field()
    status_code: int = field()
    
