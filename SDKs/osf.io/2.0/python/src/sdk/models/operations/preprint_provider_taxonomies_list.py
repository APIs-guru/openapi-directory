from dataclasses import dataclass, field
from typing import List


@dataclass
class PreprintProviderTaxonomiesListPathParams:
    preprint_provider_id: str = field(default=None, metadata={'path_param': { 'field_name': 'preprint_provider_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintProviderTaxonomiesListRequest:
    path_params: PreprintProviderTaxonomiesListPathParams = field(default=None)
    

@dataclass
class PreprintProviderTaxonomiesListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
