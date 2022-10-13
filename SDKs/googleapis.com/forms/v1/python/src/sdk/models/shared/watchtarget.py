from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudpubsubtopic


@dataclass_json
@dataclass
class WatchTarget:
    topic: Optional[cloudpubsubtopic.CloudPubsubTopic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
