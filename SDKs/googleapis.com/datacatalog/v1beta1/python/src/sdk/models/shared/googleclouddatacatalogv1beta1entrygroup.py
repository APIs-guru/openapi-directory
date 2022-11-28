from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1EntryGroupInput:
    r"""GoogleCloudDatacatalogV1beta1EntryGroupInput
    EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
    """
    
    data_catalog_timestamps: Optional[GoogleCloudDatacatalogV1beta1SystemTimestampsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCatalogTimestamps') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1EntryGroup:
    r"""GoogleCloudDatacatalogV1beta1EntryGroup
    EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
    """
    
    data_catalog_timestamps: Optional[GoogleCloudDatacatalogV1beta1SystemTimestamps] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCatalogTimestamps') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
