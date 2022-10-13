from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadataimport


@dataclass_json
@dataclass
class ListMetadataImportsResponse:
    metadata_imports: Optional[List[metadataimport.MetadataImport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataImports' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
