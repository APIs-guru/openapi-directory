from dataclasses import dataclass, field



@dataclass
class PostStorageCommitmentIDRemovePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStorageCommitmentIDRemoveRequest:
    path_params: PostStorageCommitmentIDRemovePathParams = field()
    

@dataclass
class PostStorageCommitmentIDRemoveResponse:
    content_type: str = field()
    status_code: int = field()
    
