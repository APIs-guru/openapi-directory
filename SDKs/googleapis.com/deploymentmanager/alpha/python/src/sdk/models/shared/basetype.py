from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import collectionoverride
from . import credential
from . import options


@dataclass_json
@dataclass
class BaseType:
    collection_overrides: Optional[List[collectionoverride.CollectionOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionOverrides' }})
    credential: Optional[credential.Credential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential' }})
    descriptor_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptorUrl' }})
    options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    
