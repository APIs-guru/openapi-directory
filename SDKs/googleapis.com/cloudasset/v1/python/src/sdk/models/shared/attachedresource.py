from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import versionedresource


@dataclass_json
@dataclass
class AttachedResource:
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetType' }})
    versioned_resources: Optional[List[versionedresource.VersionedResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionedResources' }})
    
