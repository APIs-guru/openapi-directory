from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TaxonomyClassesPathParams:
    classifier_name: str = field(metadata={'path_param': { 'field_name': 'classifierName', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaxonomyClassesRequest:
    path_params: TaxonomyClassesPathParams = field()
    

@dataclass
class TaxonomyClassesResponse:
    content_type: str = field()
    status_code: int = field()
    api_classifier_taxonomy_out: Optional[shared.APIClassifierTaxonomyOut] = field(default=None)
    
