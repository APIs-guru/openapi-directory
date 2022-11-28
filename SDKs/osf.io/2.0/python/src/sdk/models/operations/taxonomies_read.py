from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TaxonomiesReadPathParams:
    taxonomy_id: str = field(metadata={'path_param': { 'field_name': 'taxonomy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaxonomiesReadRequest:
    path_params: TaxonomiesReadPathParams = field()
    

@dataclass
class TaxonomiesReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
