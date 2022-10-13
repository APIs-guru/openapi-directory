from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentchange
from . import documentdelete
from . import documentremove
from . import existencefilter
from . import targetchange


@dataclass_json
@dataclass
class ListenResponse:
    document_change: Optional[documentchange.DocumentChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentChange' }})
    document_delete: Optional[documentdelete.DocumentDelete] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentDelete' }})
    document_remove: Optional[documentremove.DocumentRemove] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentRemove' }})
    filter: Optional[existencefilter.ExistenceFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    target_change: Optional[targetchange.TargetChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetChange' }})
    
