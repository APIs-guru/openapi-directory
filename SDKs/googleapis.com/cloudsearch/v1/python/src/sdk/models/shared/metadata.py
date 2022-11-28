from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metadata:
    r"""Metadata
    Metadata of a matched search result.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_options: Optional[ResultDisplayMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayOptions') }})
    fields: Optional[List[NamedProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    owner: Optional[Person] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
