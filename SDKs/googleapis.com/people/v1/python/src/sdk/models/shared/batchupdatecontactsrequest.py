from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BatchUpdateContactsRequestSourcesEnum(str, Enum):
    READ_SOURCE_TYPE_UNSPECIFIED = "READ_SOURCE_TYPE_UNSPECIFIED"
    READ_SOURCE_TYPE_PROFILE = "READ_SOURCE_TYPE_PROFILE"
    READ_SOURCE_TYPE_CONTACT = "READ_SOURCE_TYPE_CONTACT"
    READ_SOURCE_TYPE_DOMAIN_CONTACT = "READ_SOURCE_TYPE_DOMAIN_CONTACT"


@dataclass_json
@dataclass
class BatchUpdateContactsRequestInput:
    r"""BatchUpdateContactsRequestInput
    A request to update a batch of contacts.
    """
    
    contacts: Optional[dict[str, PersonInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    read_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readMask') }})
    sources: Optional[List[BatchUpdateContactsRequestSourcesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
