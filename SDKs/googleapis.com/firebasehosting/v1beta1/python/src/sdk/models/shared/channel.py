from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import release


@dataclass_json
@dataclass
class Channel:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release: Optional[release.Release] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release' }})
    retained_release_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retainedReleaseCount' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
