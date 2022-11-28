from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContactInfoList:
    r"""ContactInfoList
    Wrapper message for a list of contact information defining Customer Match audience members.
    """
    
    contact_infos: Optional[List[ContactInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactInfos') }})
    
