from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIClassifierTaxonomyOut:
    classifier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifierName' }})
    taxonomy_classes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomyClasses' }})
    
