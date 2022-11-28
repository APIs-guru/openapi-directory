from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostOwnershipInstallQueryParams:
    app_id: str = field(metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    model_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modelId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostOwnershipInstallRequest:
    query_params: PostOwnershipInstallQueryParams = field()
    

@dataclass
class PostOwnershipInstallResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
