from dataclasses import dataclass, field



@dataclass
class TaxonomiesReadPathParams:
    taxonomy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taxonomy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaxonomiesReadRequest:
    path_params: TaxonomiesReadPathParams = field(default=None)
    

@dataclass
class TaxonomiesReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
