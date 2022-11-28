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
class ObAccount6Account:
    r"""ObAccount6Account
    Provides the details to identify an account.
    """
    
    identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    scheme_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    

@dataclass_json
@dataclass
class ObAccount6:
    r"""ObAccount6
    Unambiguous identification of the account to which credit and debit entries are made. The following fields are optional only for accounts that are switched:
    
      * Data.Currency  
      * Data.AccountType  
      * Data.AccountSubType
    
    For all other accounts, the fields must be populated by the ASPSP.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    account: Optional[List[ObAccount6Account]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    account_sub_type: Optional[ObExternalAccountSubType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountSubType') }})
    account_type: Optional[ObExternalAccountType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountType') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    maturity_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaturityDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nickname') }})
    opening_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    servicer: Optional[ObBranchAndFinancialInstitutionIdentification50] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Servicer') }})
    status: Optional[ObAccountStatus1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusUpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    switch_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SwitchStatus') }})
    
