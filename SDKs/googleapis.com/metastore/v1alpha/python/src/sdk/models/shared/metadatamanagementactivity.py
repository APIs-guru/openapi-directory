from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadataexport
from . import restore


@dataclass_json
@dataclass
class MetadataManagementActivity:
    metadata_exports: Optional[List[metadataexport.MetadataExport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataExports' }})
    restores: Optional[List[restore.Restore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restores' }})
    
