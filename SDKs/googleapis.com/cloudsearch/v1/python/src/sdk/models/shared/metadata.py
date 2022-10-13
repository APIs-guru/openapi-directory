from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resultdisplaymetadata
from . import namedproperty
from . import person
from . import source


@dataclass_json
@dataclass
class Metadata:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_options: Optional[resultdisplaymetadata.ResultDisplayMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayOptions' }})
    fields: Optional[List[namedproperty.NamedProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    owner: Optional[person.Person] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUrl' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
