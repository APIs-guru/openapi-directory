from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class HoldCorpusEnum(str, Enum):
    CORPUS_TYPE_UNSPECIFIED = "CORPUS_TYPE_UNSPECIFIED"
    DRIVE = "DRIVE"
    MAIL = "MAIL"
    GROUPS = "GROUPS"
    HANGOUTS_CHAT = "HANGOUTS_CHAT"
    VOICE = "VOICE"


@dataclass_json
@dataclass
class Hold:
    r"""Hold
    A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
    """
    
    accounts: Optional[List[HeldAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    corpus: Optional[HoldCorpusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corpus') }})
    hold_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_unit: Optional[HeldOrgUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnit') }})
    query: Optional[CorpusQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
