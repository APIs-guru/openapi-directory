from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CertificateMapEntryMatcherEnum(str, Enum):
    MATCHER_UNSPECIFIED = "MATCHER_UNSPECIFIED"
    PRIMARY = "PRIMARY"

class CertificateMapEntryStateEnum(str, Enum):
    SERVING_STATE_UNSPECIFIED = "SERVING_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    PENDING = "PENDING"


@dataclass_json
@dataclass
class CertificateMapEntry:
    r"""CertificateMapEntry
    Defines a certificate map entry.
    """
    
    certificates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    matcher: Optional[CertificateMapEntryMatcherEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matcher') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[CertificateMapEntryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class CertificateMapEntryInput:
    r"""CertificateMapEntryInput
    Defines a certificate map entry.
    """
    
    certificates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    matcher: Optional[CertificateMapEntryMatcherEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matcher') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
