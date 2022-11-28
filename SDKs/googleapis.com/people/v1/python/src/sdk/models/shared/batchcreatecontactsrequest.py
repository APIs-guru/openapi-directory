from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BatchCreateContactsRequestSourcesEnum(str, Enum):
    READ_SOURCE_TYPE_UNSPECIFIED = "READ_SOURCE_TYPE_UNSPECIFIED"
    READ_SOURCE_TYPE_PROFILE = "READ_SOURCE_TYPE_PROFILE"
    READ_SOURCE_TYPE_CONTACT = "READ_SOURCE_TYPE_CONTACT"
    READ_SOURCE_TYPE_DOMAIN_CONTACT = "READ_SOURCE_TYPE_DOMAIN_CONTACT"


@dataclass_json
@dataclass
class BatchCreateContactsRequestInput:
    r"""BatchCreateContactsRequestInput
    A request to create a batch of contacts.
    """
    
    contacts: Optional[List[ContactToCreateInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    read_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readMask') }})
    sources: Optional[List[BatchCreateContactsRequestSourcesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
