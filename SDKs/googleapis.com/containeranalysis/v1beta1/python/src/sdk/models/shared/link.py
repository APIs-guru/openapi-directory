from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import byproducts
from . import environment
from . import grafeasv1beta1intotoartifact
from . import grafeasv1beta1intotoartifact


@dataclass_json
@dataclass
class Link:
    byproducts: Optional[byproducts.ByProducts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byproducts' }})
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    environment: Optional[environment.Environment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    materials: Optional[List[grafeasv1beta1intotoartifact.GrafeasV1beta1IntotoArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    products: Optional[List[grafeasv1beta1intotoartifact.GrafeasV1beta1IntotoArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    
