from dataclasses import dataclass, field



@dataclass
class PreprintProviderDetailPathParams:
    preprint_provider_id: str = field(default=None, metadata={'path_param': { 'field_name': 'preprint_provider_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintProviderDetailRequest:
    path_params: PreprintProviderDetailPathParams = field(default=None)
    

@dataclass
class PreprintProviderDetailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
