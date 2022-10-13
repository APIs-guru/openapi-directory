from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import forwardpaging
from . import extensionactiondefinition


@dataclass_json
@dataclass
class CollectionResponseExtensionActionDefinitionForwardPaging:
    paging: Optional[forwardpaging.ForwardPaging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paging' }})
    results: List[extensionactiondefinition.ExtensionActionDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
