from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replication
from . import rotation
from . import topic


@dataclass_json
@dataclass
class Secret:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    replication: Optional[replication.Replication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replication' }})
    rotation: Optional[rotation.Rotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotation' }})
    topics: Optional[List[topic.Topic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    version_aliases: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionAliases' }})
    
