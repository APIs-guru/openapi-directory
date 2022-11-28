from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SourceTypeEnum(str, Enum):
    SOURCE_TYPE_UNSPECIFIED = "SOURCE_TYPE_UNSPECIFIED"
    ACCOUNT = "ACCOUNT"
    PROFILE = "PROFILE"
    DOMAIN_PROFILE = "DOMAIN_PROFILE"
    CONTACT = "CONTACT"
    OTHER_CONTACT = "OTHER_CONTACT"
    DOMAIN_CONTACT = "DOMAIN_CONTACT"


@dataclass_json
@dataclass
class SourceInput:
    r"""SourceInput
    The source of a field.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class Source:
    r"""Source
    The source of a field.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    profile_metadata: Optional[ProfileMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileMetadata') }})
    type: Optional[SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
