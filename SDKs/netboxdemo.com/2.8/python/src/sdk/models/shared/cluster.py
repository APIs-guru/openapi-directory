from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import nestedclustergroup
from . import nestedsite
from . import nestedtenant
from . import nestedclustertype


@dataclass_json
@dataclass
class Cluster:
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_count' }})
    group: Optional[nestedclustergroup.NestedClusterGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    site: Optional[nestedsite.NestedSite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant: Optional[nestedtenant.NestedTenant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    type: nestedclustertype.NestedClusterType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    virtualmachine_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualmachine_count' }})
    
