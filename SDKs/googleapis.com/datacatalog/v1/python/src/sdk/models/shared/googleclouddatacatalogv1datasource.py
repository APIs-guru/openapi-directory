from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatacatalogV1DataSourceServiceEnum(str, Enum):
    SERVICE_UNSPECIFIED = "SERVICE_UNSPECIFIED"
    CLOUD_STORAGE = "CLOUD_STORAGE"
    BIGQUERY = "BIGQUERY"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataSourceInput:
    r"""GoogleCloudDatacatalogV1DataSourceInput
    Physical location of an entry.
    """
    
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    service: Optional[GoogleCloudDatacatalogV1DataSourceServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    storage_properties: Optional[GoogleCloudDatacatalogV1StorageProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageProperties') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataSource:
    r"""GoogleCloudDatacatalogV1DataSource
    Physical location of an entry.
    """
    
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    service: Optional[GoogleCloudDatacatalogV1DataSourceServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    source_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceEntry') }})
    storage_properties: Optional[GoogleCloudDatacatalogV1StorageProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageProperties') }})
    
