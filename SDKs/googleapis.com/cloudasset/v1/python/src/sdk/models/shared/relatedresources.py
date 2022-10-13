from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import relatedresource


@dataclass_json
@dataclass
class RelatedResources:
    related_resources: Optional[List[relatedresource.RelatedResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedResources' }})
    
