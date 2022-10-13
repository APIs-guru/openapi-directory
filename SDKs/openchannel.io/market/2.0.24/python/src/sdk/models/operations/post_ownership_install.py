from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostOwnershipInstallQueryParams:
    app_id: str = field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    model_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modelId', 'style': 'form', 'explode': True }})
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostOwnershipInstallRequest:
    query_params: PostOwnershipInstallQueryParams = field(default=None)
    

@dataclass
class PostOwnershipInstallResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
