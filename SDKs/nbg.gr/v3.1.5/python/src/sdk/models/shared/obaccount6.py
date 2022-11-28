from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObAccount6:
    r"""ObAccount6
    Unambiguous identification of the account to which credit and debit entries are made.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    account_sub_type: ObExternalAccountSubType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountSubType') }})
    account_type: ObExternalAccountType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountType') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    account: Optional[List[ObCashAccount5]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nickname') }})
    opening_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    servicer: Optional[ObBranchAndFinancialInstitutionIdentification5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Servicer') }})
    
