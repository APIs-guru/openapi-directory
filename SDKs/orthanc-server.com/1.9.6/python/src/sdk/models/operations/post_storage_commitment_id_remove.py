from dataclasses import dataclass, field



@dataclass
class PostStorageCommitmentIDRemovePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStorageCommitmentIDRemoveRequest:
    path_params: PostStorageCommitmentIDRemovePathParams = field(default=None)
    

@dataclass
class PostStorageCommitmentIDRemoveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
