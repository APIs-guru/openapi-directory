from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ObjectStorageClusterStatusEnum(str, Enum):
    AVAILABLE = "available"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class ObjectStorageCluster:
    r"""ObjectStorageCluster
    An Object Storage Cluster
    """
    
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    static_site_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('static_site_domain') }})
    status: Optional[ObjectStorageClusterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
