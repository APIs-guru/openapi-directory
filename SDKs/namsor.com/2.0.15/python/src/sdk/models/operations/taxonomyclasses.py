from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TaxonomyClassesPathParams:
    classifier_name: str = field(default=None, metadata={'path_param': { 'field_name': 'classifierName', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaxonomyClassesRequest:
    path_params: TaxonomyClassesPathParams = field(default=None)
    

@dataclass
class TaxonomyClassesResponse:
    api_classifier_taxonomy_out: Optional[shared.APIClassifierTaxonomyOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
