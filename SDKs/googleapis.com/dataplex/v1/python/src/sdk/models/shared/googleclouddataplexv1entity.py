from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDataplexV1EntitySystemEnum(str, Enum):
    STORAGE_SYSTEM_UNSPECIFIED = "STORAGE_SYSTEM_UNSPECIFIED"
    CLOUD_STORAGE = "CLOUD_STORAGE"
    BIGQUERY = "BIGQUERY"

class GoogleCloudDataplexV1EntityTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TABLE = "TABLE"
    FILESET = "FILESET"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Entity:
    r"""GoogleCloudDataplexV1Entity
    Represents tables and fileset metadata contained within a zone.
    """
    
    asset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    catalog_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogEntry') }})
    compatibility: Optional[GoogleCloudDataplexV1EntityCompatibilityStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPath') }})
    data_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPathPattern') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    format: Optional[GoogleCloudDataplexV1StorageFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: Optional[GoogleCloudDataplexV1Schema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    system: Optional[GoogleCloudDataplexV1EntitySystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    type: Optional[GoogleCloudDataplexV1EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudDataplexV1EntityInput:
    r"""GoogleCloudDataplexV1EntityInput
    Represents tables and fileset metadata contained within a zone.
    """
    
    asset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    compatibility: Optional[GoogleCloudDataplexV1EntityCompatibilityStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility') }})
    data_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPath') }})
    data_path_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPathPattern') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    format: Optional[GoogleCloudDataplexV1StorageFormatInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    schema: Optional[GoogleCloudDataplexV1Schema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    system: Optional[GoogleCloudDataplexV1EntitySystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    type: Optional[GoogleCloudDataplexV1EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
